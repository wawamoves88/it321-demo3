var url = 'http://newsapi.org/v2/top-headlines?country=ph&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
function getSelected(){
    var selectedValue = document.getElementById("country").value;
    var selectedValueCategory = document.getElementById("category").value;
    
   if(selectedValue=='1'&& selectedValueCategory=='1'){
            var url = 'http://newsapi.org/v2/top-headlines?country=ph&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==1&&selectedValueCategory==2){
     var url = 'http://newsapi.org/v2/top-headlines?country=ph&category=business&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==1&&selectedValueCategory==3){
    var url = 'http://newsapi.org/v2/top-headlines?country=ph&category=entertainment&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==1&&selectedValueCategory==4){
     var url = 'http://newsapi.org/v2/top-headlines?country=ph&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==1&&selectedValueCategory==5){
    var url = 'http://newsapi.org/v2/top-headlines?country=ph&category=health&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==1&&selectedValueCategory==6){
    var url = 'http://newsapi.org/v2/top-headlines?country=ph&category=science&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==1&&selectedValueCategory==8){
    var url = 'http://newsapi.org/v2/top-headlines?country=ph&category=technology&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==1&&selectedValueCategory==7){
    var url = 'http://newsapi.org/v2/top-headlines?country=ph&category=sports&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}if(selectedValue==2&&selectedValueCategory==1){
var url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })}else if(selectedValue==2&&selectedValueCategory==2){
        var url = 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
    }else if(selectedValue==2&&selectedValueCategory==3){
    var url = 'http://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==2&&selectedValueCategory==4){
     var url = 'http://newsapi.org/v2/top-headlines?country=us&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==2&&selectedValueCategory==5){
    var url = 'http://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==2&&selectedValueCategory==6){
    var url = 'http://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==2&&selectedValueCategory==8){
    var url = 'http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==2&&selectedValueCategory==7){
    var url = 'http://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}if(selectedValue==3&&selectedValueCategory==1){
var url = 'http://newsapi.org/v2/top-headlines?country=gb&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })}else if(selectedValue==3&&selectedValueCategory==2){
        var url = 'http://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
    }else if(selectedValue==3&&selectedValueCategory==3){
    var url = 'http://newsapi.org/v2/top-headlines?country=gb&category=entertainment&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==3&&selectedValueCategory==4){
     var url = 'http://newsapi.org/v2/top-headlines?country=gb&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==3&&selectedValueCategory==5){
    var url = 'http://newsapi.org/v2/top-headlines?country=gb&category=health&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==3&&selectedValueCategory==6){
    var url = 'http://newsapi.org/v2/top-headlines?country=gb&category=science&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==3&&selectedValueCategory==8){
    var url = 'http://newsapi.org/v2/top-headlines?country=gb&category=technology&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==3&&selectedValueCategory==7){
    var url = 'http://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}if(selectedValue==4&&selectedValueCategory==1){
var url = 'http://newsapi.org/v2/top-headlines?country=ca&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })}else if(selectedValue==4&&selectedValueCategory==2){
        var url = 'http://newsapi.org/v2/top-headlines?country=ca&category=business&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
    }else if(selectedValue==4&&selectedValueCategory==3){
    var url = 'http://newsapi.org/v2/top-headlines?country=ca&category=entertainment&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==4&&selectedValueCategory==4){
     var url = 'http://newsapi.org/v2/top-headlines?country=ca&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==4&&selectedValueCategory==5){
    var url = 'http://newsapi.org/v2/top-headlines?country=ca&category=health&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==4&&selectedValueCategory==6){
    var url = 'http://newsapi.org/v2/top-headlines?country=ca&category=science&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==4&&selectedValueCategory==8){
    var url = 'http://newsapi.org/v2/top-headlines?country=ca&category=technology&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==4&&selectedValueCategory==7){
    var url = 'http://newsapi.org/v2/top-headlines?country=ca&category=sports&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}if(selectedValue==5&&selectedValueCategory==1){
var url = 'http://newsapi.org/v2/top-headlines?country=fr&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })}else if(selectedValue==5&&selectedValueCategory==2){
        var url = 'http://newsapi.org/v2/top-headlines?country=fr&category=business&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
    }else if(selectedValue==5&&selectedValueCategory==3){
    var url = 'http://newsapi.org/v2/top-headlines?country=fr&category=entertainment&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==5&&selectedValueCategory==4){
     var url = 'http://newsapi.org/v2/top-headlines?country=fr&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==5&&selectedValueCategory==5){
    var url = 'http://newsapi.org/v2/top-headlines?country=fr&category=health&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==5&&selectedValueCategory==6){
    var url = 'http://newsapi.org/v2/top-headlines?country=fr&category=science&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==5&&selectedValueCategory==8){
    var url = 'http://newsapi.org/v2/top-headlines?country=fr&category=technology&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==5&&selectedValueCategory==7){
    var url = 'http://newsapi.org/v2/top-headlines?country=fr&category=sports&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}if(selectedValue==6&&selectedValueCategory==1){
var url = 'http://newsapi.org/v2/top-headlines?country=au&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })}else if(selectedValue==6&&selectedValueCategory==2){
        var url = 'http://newsapi.org/v2/top-headlines?country=au&category=business&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
    }else if(selectedValue==6&&selectedValueCategory==3){
    var url = 'http://newsapi.org/v2/top-headlines?country=au&category=entertainment&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==6&&selectedValueCategory==4){
     var url = 'http://newsapi.org/v2/top-headlines?country=au&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==6&&selectedValueCategory==5){
    var url = 'http://newsapi.org/v2/top-headlines?country=au&category=health&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==6&&selectedValueCategory==6){
    var url = 'http://newsapi.org/v2/top-headlines?country=au&category=science&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==6&&selectedValueCategory==8){
    var url = 'http://newsapi.org/v2/top-headlines?country=au&category=technology&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==6&&selectedValueCategory==7){
    var url = 'http://newsapi.org/v2/top-headlines?country=au&category=sports&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}if(selectedValue==7&&selectedValueCategory==1){
var url = 'http://newsapi.org/v2/top-headlines?country=ar&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })}else if(selectedValue==7&&selectedValueCategory==2){
        var url = 'http://newsapi.org/v2/top-headlines?country=ar&category=business&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
    }else if(selectedValue==7&&selectedValueCategory==3){
    var url = 'http://newsapi.org/v2/top-headlines?country=ar&category=entertainment&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==7&&selectedValueCategory==4){
     var url = 'http://newsapi.org/v2/top-headlines?country=ar&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==7&&selectedValueCategory==5){
    var url = 'http://newsapi.org/v2/top-headlines?country=ar&category=health&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==7&&selectedValueCategory==6){
    var url = 'http://newsapi.org/v2/top-headlines?country=ar&category=science&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==7&&selectedValueCategory==8){
    var url = 'http://newsapi.org/v2/top-headlines?country=ar&category=technology&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==7&&selectedValueCategory==7){
    var url = 'http://newsapi.org/v2/top-headlines?country=ar&category=sports&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}if(selectedValue==8&&selectedValueCategory==1){
var url = 'http://newsapi.org/v2/top-headlines?country=id&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })}else if(selectedValue==8&&selectedValueCategory==2){
        var url = 'http://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
    }else if(selectedValue==8&&selectedValueCategory==3){
    var url = 'http://newsapi.org/v2/top-headlines?country=id&category=entertainment&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==8&&selectedValueCategory==4){
     var url = 'http://newsapi.org/v2/top-headlines?country=id&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==8&&selectedValueCategory==5){
    var url = 'http://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==8&&selectedValueCategory==6){
    var url = 'http://newsapi.org/v2/top-headlines?country=id&category=science&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==8&&selectedValueCategory==8){
    var url = 'http://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}else if(selectedValue==8&&selectedValueCategory==7){
    var url = 'http://newsapi.org/v2/top-headlines?country=id&category=sports&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
const news = document.querySelector('.news');
fetch(url)
    .then(data=> data.json())
    .then(response => {
        console.log(response);
        const articles = response.articles
        let newsItem = ''

        articles.forEach(article =>{
            newsItem += `
            
            <div class="card">
            <div class="image">
            <img src="${article.urlToImage}" alt="" width=100% height=240px>
             </div>
            <div class="title">
               <h4>${article.title}</h4>
               <h5 class="name">${article.source.name}</h5>
               <p>${article.publishedAt}</p>
               <p class="text">${article.content}</p>
               </div>       
        <div class="card-footer">
        
        <button href="${article.url}" class="btn">view the page</button>
             
      </div>
      </div>
            `
    });
    news.innerHTML = newsItem
        console.log(newsItem)
    })
    .catch(error =>{

    })
}

}
//    }else if(selectedValue==3){
//     var url = 'http://newsapi.org/v2/top-headlines?country=gb&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
// const news = document.querySelector('.news');
// fetch(url)
//     .then(data=> data.json())
//     .then(response => {
//         console.log(response);
//         const articles = response.articles
//         let newsItem = ''

//         articles.forEach(article =>{
//             newsItem += `
            
//             <div class="card">
//             <div class="image">
//             <img src="${article.urlToImage}" alt="" width=100% height=240px>
//              </div>
//             <div class="title">
//                <h4>${article.title}</h4>
//                <h5 class="name">${article.source.name}</h5>
//                <p>${article.publishedAt}</p>
//                <p class="text">${article.content}</p>
//                </div>       
//         <div class="card-footer">
        
//         <button href="${article.url}" class="btn">view the page</button>
             
//       </div>
//       </div>
//             `
//     });
//     news.innerHTML = newsItem
//         console.log(newsItem)
//     })
//     .catch(error =>{

//     })
//    }else if(selectedValue==4){
//        var url = 'http://newsapi.org/v2/top-headlines?country=ca&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
// const news = document.querySelector('.news');
// fetch(url)
//     .then(data=> data.json())
//     .then(response => {
//         console.log(response);
//         const articles = response.articles
//         let newsItem = ''

//         articles.forEach(article =>{
//             newsItem += `
            
//             <div class="card">
//             <div class="image">
//             <img src="${article.urlToImage}" alt="" width=100% height=240px>
//              </div>
//             <div class="title">
//                <h4>${article.title}</h4>
//                <h5 class="name">${article.source.name}</h5>
//                <p>${article.publishedAt}</p>
//                <p class="text">${article.content}</p>
//                </div>       
//         <div class="card-footer">
        
//         <button href="${article.url}" class="btn">view the page</button>
             
//       </div>
//       </div>
//             `
//     });
//     news.innerHTML = newsItem
//         console.log(newsItem)
//     })
//     .catch(error =>{

//     })
//    }else if(selectedValue==5){
//        var url = 'http://newsapi.org/v2/top-headlines?country=fr&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
// const news = document.querySelector('.news');
// fetch(url)
//     .then(data=> data.json())
//     .then(response => {
//         console.log(response);
//         const articles = response.articles
//         let newsItem = ''

//         articles.forEach(article =>{
//             newsItem += `
            
//             <div class="card">
//             <div class="image">
//             <img src="${article.urlToImage}" alt="" width=100% height=240px>
//              </div>
//             <div class="title">
//                <h4>${article.title}</h4>
//                <h5 class="name">${article.source.name}</h5>
//                <p>${article.publishedAt}</p>
//                <p class="text">${article.content}</p>
//                </div>       
//         <div class="card-footer">
        
//         <button href="${article.url}" class="btn">view the page</button>
             
//       </div>
//       </div>
//             `
//     });
//     news.innerHTML = newsItem
//         console.log(newsItem)
//     })
//     .catch(error =>{

//     })
//    }else if(selectedValue==6){
//        var url = 'http://newsapi.org/v2/top-headlines?country=au&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
// const news = document.querySelector('.news');
// fetch(url)
//     .then(data=> data.json())
//     .then(response => {
//         console.log(response);
//         const articles = response.articles
//         let newsItem = ''

//         articles.forEach(article =>{
//             newsItem += `
            
//             <div class="card">
//             <div class="image">
//             <img src="${article.urlToImage}" alt="" width=100% height=240px>
//              </div>
//             <div class="title">
//                <h4>${article.title}</h4>
//                <h5 class="name">${article.source.name}</h5>
//                <p>${article.publishedAt}</p>
//                <p class="text">${article.content}</p>
//                </div>       
//         <div class="card-footer">
        
//         <button href="${article.url}" class="btn">view the page</button>
             
//       </div>
//       </div>
//             `
//     });
//     news.innerHTML = newsItem
//         console.log(newsItem)
//     })
//     .catch(error =>{

//     })
//    }else if(selectedValue == 7){
//         var url = 'http://newsapi.org/v2/top-headlines?country=ar&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
// const news = document.querySelector('.news');
// fetch(url)
//     .then(data=> data.json())
//     .then(response => {
//         console.log(response);
//         const articles = response.articles
//         let newsItem = ''

//         articles.forEach(article =>{
//             newsItem += `
            
//             <div class="card">
//             <div class="image">
//             <img src="${article.urlToImage}" alt="" width=100% height=240px>
//              </div>
//             <div class="title">
//                <h4>${article.title}</h4>
//                <h5 class="name">${article.source.name}</h5>
//                <p>${article.publishedAt}</p>
//                <p class="text">${article.content}</p>
//                </div>       
//         <div class="card-footer">
        
//         <button href="${article.url}" class="btn">view the page</button>
             
//       </div>
//       </div>
//             `
//     });
//     news.innerHTML = newsItem
//         console.log(newsItem)
//     })
//     .catch(error =>{

//     })
//    }else if(selectedValue==8){
//         var url = 'http://newsapi.org/v2/top-headlines?country=id&apiKey=8f8e8b6a5d1346a68345d2a3397aaffd';
// const news = document.querySelector('.news');
// fetch(url)
//     .then(data=> data.json())
//     .then(response => {
//         console.log(response);
//         const articles = response.articles
//         let newsItem = ''

//         articles.forEach(article =>{
//             newsItem += `
            
//             <div class="card">
//             <div class="image">
//             <img src="${article.urlToImage}" alt="" width=100% height=240px>
//              </div>
//             <div class="title">
//                <h4>${article.title}</h4>
//                <h5 class="name">${article.source.name}</h5>
//                <p>${article.publishedAt}</p>
//                <p class="text">${article.content}</p>
//                </div>       
//         <div class="card-footer">
        
//         <button href="${article.url}" class="btn">view the page</button>
             
//       </div>
//       </div>
//             `
//     });
//     news.innerHTML = newsItem
//         console.log(newsItem)
//     })
//     .catch(error =>{

//     })
//     }
//    }
//