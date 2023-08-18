// pages/api/users.js

const usersData = [
  { id: 1, name: "User 1" },
  { id: 2, name: "User 2" },
  { id: 3, name: "User 3" },
];

export default function getUsers(req, res) {
  if (req.method === "GET") {
    res.status(200).json(usersData);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
