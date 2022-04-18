console.log('hello this is project3');
let apiKey = '001bdf534c5d4fba86c8d93515f8a3d6';
let btn = document.getElementById('btn')


let source='bbc-news';
let newsAccordion = document.getElementById('newsAccordion')

const xhr=new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,'true' );
xhr.onload=function () {    
    if (this.status==200){
        let json=JSON.parse(this.responseText);
        let arti=json.articles;
        // console.log('arti :', arti);
        let news=''
        arti.forEach(function (element,index) {
          news +=`<div class="card">
          <div class="card-header" id="heading${index}">
              <h2 class="mb-0">
              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                  aria-expanded="false" aria-controls="collapse${index}">
                 <b>ARK Breaking ${index+1}:</b> ${element.title}
              </button>
              </h2>
          </div>

          <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
              <div class="card-body"> ${element.content}. <a href="${element.url}" target="_blank" >Read more here</a>  </div>
          </div>
      </div>` 
      console.log('element :', element,index); 
        });
        newsAccordion.innerHTML=news;



    }
    else
    {
        console.log("Some error occured")
    }
    
}
xhr.send()




