// Функция для добавления новой статьи
function addArticle() {
    // Получаем основной блок для вставки статьи
    const mainContent = document.getElementById("main-content");

    // Создаем элементы новой статьи
    const newArticle = document.createElement("article");
    const articleTitle = document.createElement("h2");
    const articleContent = document.createElement("p");

    // Добавляем текст для заголовка и содержания статьи
    articleTitle.textContent = "Новая статья";
    articleContent.textContent = "Это новый текст статьи, добавленный по нажатию на ссылку.";

    // Вставляем заголовок и текст в статью
    newArticle.appendChild(articleTitle);
    newArticle.appendChild(articleContent);

    // Вставляем новую статью в основной блок
    mainContent.appendChild(newArticle);

    // Сохраняем статью в localStorage
    saveArticle("Новая статья", "Это новый текст статьи, добавленный по нажатию на ссылку.");
}

// Функция для сохранения статьи в localStorage
function saveArticle(title, content) {
    // Получаем текущие статьи из localStorage
    let articles = JSON.parse(localStorage.getItem("articles")) || [];
    
    // Добавляем новую статью в массив
    articles.push({ title, content });
    
    // Сохраняем обновленный массив обратно в localStorage
    localStorage.setItem("articles", JSON.stringify(articles));
}

// Функция для загрузки статей из localStorage при загрузке страницы
function loadArticles() {
    // Получаем статьи из localStorage
    let articles = JSON.parse(localStorage.getItem("articles")) || [];
    
    // Для каждой статьи создаем HTML-элементы и добавляем их на страницу
    articles.forEach(article => {
        const mainContent = document.getElementById("main-content");
        const newArticle = document.createElement("article");
        const articleTitle = document.createElement("h2");
        const articleContent = document.createElement("p");

        articleTitle.textContent = article.title;
        articleContent.textContent = article.content;

        newArticle.appendChild(articleTitle);
        newArticle.appendChild(articleContent);
        mainContent.appendChild(newArticle);
    });
}

// Загружаем статьи при открытии страницы
document.addEventListener("DOMContentLoaded", loadArticles);
