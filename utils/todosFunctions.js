export const getTodos = async () => {
    try {
        const response = await fetch("/api/todos", {
            method: "GET",
        });
    
        const data = await response.json();
    
        if (!data?.data) {
            return [];
        }
    
        return data.data;
    } catch (error) {
        console.error(error);
    }
}

export const getTodoById = async (id) => {
    try {
        const response = await fetch(`/api/todos?id=${id}`, {
            method: "GET",
        });
    
        const data = await response.json();
    
        if (!data?.data) {
            return null;
        }
    
        return data.data;
    } catch (error) {
        console.error(error);
    }
}

export const createTodo = async (todo) => {
    try {
        delete todo._id;

        const response = await fetch("/api/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todo),
        });

        const data = await response.json();

        if (!data?.data) {
            return null;
        }

        return data.data;
    } catch (error) {
        console.error(error);
    }
}

export const updateTodo = async (todo) => {
    try {
        const response = await fetch("/api/todos", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todo),
        });

        const data = await response.json();

        if (!data?.data) {
            return null;
        }

        return data.data;
    } catch (error) {
        console.error(error);
    }
}

export const deleteTodo = async (id) => {
    try {
        const response = await fetch(`/api/todos?id=${id}`, {
            method: "DELETE",
        });

        const data = await response.json();

        if (!data?.data) {
            return null;
        }

        return data.data;
    } catch (error) {
        console.error(error);
    }
}