// Функция для добавления новой статьи
function addArticle() {
    // Находим блок main для вставки статьи
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
}
