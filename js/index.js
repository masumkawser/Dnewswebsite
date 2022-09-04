
// All news 
const url='https://openapi.programming-hero.com/api/news/categories'
fetch(url)
.then(req=>req.json())
.then(allnews=>allNewsCata(allnews.data.news_category))

const allNewsCata = allnews=>{
  for(let eachNewsCat of allnews){
    const ul1=document.getElementById('ul1');
    const li=document.createElement('li');
    li.classList.add('nav-item');
    li.innerHTML=`
    <a class="nav-link" href="#" id="${eachNewsCat.category_id}" onclick="eachButton('${eachNewsCat.category_id}')">${eachNewsCat.category_name}</a>
    `
    ul1.appendChild(li);
  }
}
function eachButton(id){
  console.log(id)
  const idurl=`https://openapi.programming-hero.com/api/news/category/${id}`
  fetch(idurl)
  .then(req1=>req1.json())
  .then(eachNews=>eachNewsPortal(eachNews.data))
}

const eachNewsPortal= eachNews=>{
  const newShow=document.getElementById('newShow');
  newShow.innerHTML='';
  for(let eachNewshow of eachNews){
    const div=document.createElement('div');
    div.classList.add('row');
    div.innerHTML=`
    <div  class="card mb-3 mt-5 border border" style="max-width:100%;">
    <div class="col-md-4">
    <img src="${eachNewshow.thumbnail_url}" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${eachNewshow.title}</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //   <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    //   Detail more...
    // </button>
    </div>
  </div>
  </div>`
      
      newShow.appendChild(div);
  }
}