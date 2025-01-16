<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, PUT, DELETE, GET');
header("Access-Control-Allow-Headers: Content-Type");


include_once 'db.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'POST':
        createBook();
        break;

    case 'PUT':
        updateBook();
        break;

    case 'DELETE':
        deleteBook();
        break;

    case 'GET':
        getBooks();
        break;

    default:
        echo json_encode(['message' => 'Invalid Request']);
        break;
}

// Create a new book
function createBook()
{
    $data = json_decode(file_get_contents("php://input"));
    if (!empty($data->judul) && !empty($data->pengarang) && !empty($data->tahun_terbit)) {
        $conn = getConnection();
        $stmt = $conn->prepare("INSERT INTO buku (judul, pengarang, tahun_terbit, genre) VALUES (?, ?, ?, ?)");
        $stmt->bind_param('ssss', $data->judul, $data->pengarang, $data->tahun_terbit, $data->genre);

        if ($stmt->execute()) {
            echo json_encode(['message' => 'Book Created']);
        } else {
            echo json_encode(['message' => 'Book Not Created']);
        }

        $stmt->close();
        $conn->close();
    } else {
        echo json_encode(['message' => 'Incomplete Data']);
    }
}

// Update book information
function updateBook()
{
    $data = json_decode(file_get_contents("php://input"));
    if (!empty($data->id) && !empty($data->judul) && !empty($data->pengarang) && !empty($data->tahun_terbit)) {
        $conn = getConnection();
        $stmt = $conn->prepare("UPDATE buku SET judul = ?, pengarang = ?, tahun_terbit = ?, genre = ? WHERE id = ?");
        $stmt->bind_param('ssssi', $data->judul, $data->pengarang, $data->tahun_terbit, $data->genre, $data->id);

        if ($stmt->execute()) {
            echo json_encode(['message' => 'Book Updated']);
        } else {
            echo json_encode(['message' => 'Book Not Updated']);
        }

        $stmt->close();
        $conn->close();
    } else {
        echo json_encode(['message' => 'Incomplete Data']);
    }
}

// Delete a book
function deleteBook()
{
    $data = json_decode(file_get_contents("php://input"));
    if (!empty($data->id)) {
        $conn = getConnection();
        $stmt = $conn->prepare("DELETE FROM buku WHERE id = ?");
        $stmt->bind_param('i', $data->id);

        if ($stmt->execute()) {
            echo json_encode(['message' => 'Book Deleted']);
        } else {
            echo json_encode(['message' => 'Book Not Deleted']);
        }

        $stmt->close();
        $conn->close();
    } else {
        echo json_encode(['message' => 'Invalid ID']);
    }
}

// Get books (all or by ID)
function getBooks()
{
    $conn = getConnection();

    if (isset($_GET['id'])) {
        $id = $_GET['id'];
        $stmt = $conn->prepare("SELECT * FROM buku WHERE id = ?");
        $stmt->bind_param('i', $id);
    } else {
        $stmt = $conn->prepare("SELECT * FROM buku");
    }

    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $books = [];
        while ($row = $result->fetch_assoc()) {
            $books[] = $row;
        }
        echo json_encode($books);
    } else {
        echo json_encode(['message' => 'No Books Found']);
    }

    $stmt->close();
    $conn->close();
}
