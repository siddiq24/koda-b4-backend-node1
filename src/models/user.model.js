const users = [
    { id: 1, email: 'sidik@email.com', password: 'password123' },
];

module.exports = {
    register: (userData) => {
        const newUser = {
            id: users.length + 1,
            email: userData.email,
            password: userData.password,
        };
        users.push(newUser);
        return newUser;
    },

    findUserByEmail: (email) => {
        return users.find(u => u.email === email);
    }
};
