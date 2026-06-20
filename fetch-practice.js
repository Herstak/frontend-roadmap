// Task 1
async function getPost(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        console.log(data);
    }
    catch (error) {
        console.log("Ошибка: ", error);
    }
    
}

getPost(1);

// Task 2
async function getAllPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/");    
        const data = await response.json();
        console.log(data.length);
        console.log(data.slice(0, 5));
    } catch (error) {
        console.log("Ошибка: ", error);
    }
}

getAllPosts();

// Task 3
async function getPostSafe(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

        if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
        }

        const data = await response.json();
        console.log("Успех: ", data.title);
    } catch (error) {
        console.log("Поймана ошибка: ", error.message);
    }
}

getPostSafe(1);
getPostSafe(99999);

// Task 4
async function createPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title: "Мой первый пост",
            body: "Это тело поста",
            userId: 1
        })
    });

    const data = await response.json();
    console.log("Создан пост", data);
}

createPost();

// Task 5
async function getUserWithPosts(userId) {
    try {
        const [userResponse, postResponse] = await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        ]);

        if (!userResponse.ok || !postResponse.ok) {
            throw new Error("Один из запросов не удался");
        }

        const user = await responseUserId.json();
        const posts = await responseUserPosts.json();

        console.log(`${user.name} написал(а) ${posts.length} постов.`);
    } catch (error) {
        console.log(`Ошибка: ${error.message}`);
    }       
}

getUserWithPosts(1);