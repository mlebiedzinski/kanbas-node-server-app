import * as dao from "./dao.js";
// let currentUser = null;
function UserRoutes(app) {
    const createUser = async (req, res) => { };
    const deleteUser = async (req, res) => { };
    const findAllUsers = async (req, res) => { };
    const findUserById = async (req, res) => { };
    const updateUser = async (req, res) => { };
    const signup = async (req, res) => { };
    const signin = async (req, res) => {
        const { username, password } = req.body;
        const currentUser = await dao.findUserByCredentials(username, password);
        req.session['currentUser'] = currnetUser;
        res.json(currentUser);
    };
    const signout = (req, res) => { };
    const account = async (req, res) => {
        res.json(req.session['currentUser']);
    };
    const updateUser = async (req, res) => {
        const { userId } = req.params;
        const status = await dao.updateUser(userId, req.body);
        const currentUser = await dao.findUserById(userId);
        req.session['currentUser'] = currentUser;
        res.json(status);
    };
    const findAllUsers = async (req, res) => {
        const users = await dao.findAllUsers();
        res.json(users);
    };
    const createUser = async (req, res) => {
        const user = await dao.createUser(req.body);
        res.json(user);
    };
    const findUserById = async (req, res) => {
        const user = await dao.findUserById(req.params.userId);
        res.json(user);
    };
    const deleteUser = async (req, res) => {
        const status = await dao.deleteUser(req.params.userId);
        res.json(status);
    };
    const signup = async (req, res) => {
        const user = await dao.findUserByUsername(
            req.body.username);
        if (user) {
            res.status(400).json(
                { message: "Username already taken" });
        }
        const currentUser = await dao.createUser(req.body);
        req.session['currentUser'] = currentUser;
        res.json(currentUser);
    };
    const signout = (req, res) => {
        req.session.destroy();
        res.json(200);
    };
    app.post("/api/users", createUser);
    app.get("/api/users", findAllUsers);
    app.get("/api/users/:userId", findUserById);
    app.put("/api/users/:userId", updateUser);
    app.delete("/api/users/:userId", deleteUser);
    app.post("/api/users/signup", signup);
    app.post("/api/users/signin", signin);
    app.post("/api/users/signout", signout);
    app.post("/api/users/account", account);
    app.put("/api/users/:userId", updateUser);
    app.get("/api/users", findAllUsers)
    app.post("/api/users", createUser);
    app.delete("/api/users/:userId", deleteUser);
    app.post("/api/users/signup", signup);
    app.post("/api/users/signout", signout);
}
export default UserRoutes;