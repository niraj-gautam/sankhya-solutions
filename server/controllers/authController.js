const bcrypt = require("bcryptjs");
const db = require("../database");

const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: "Missing credentials",
            });
        }

        db.get(
            "SELECT * FROM users WHERE username = ?",
            [username],
            (err, user) => {
                if (
                    err ||
                    !user ||
                    !bcrypt.compareSync(password, user.password)
                ) {
                    return res.status(401).json({
                        success: false,
                        message: "Invalid credentials",
                    });
                }

                req.session.user = { id: user.id, username: user.username };
                res.json({ success: true });
            }
        );
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
};

const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ success: false });
        }
        res.clearCookie("connect.sid");
        res.json({ success: true });
    });
};

module.exports = { login, logout };
