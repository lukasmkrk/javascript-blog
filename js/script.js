'use strict';

function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');

  /* [DONE] remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');
for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}

  /* [DONE] add class 'active' to the clicked link */

clickedElement.classList.add('active');
console.log('clickedElement:', clickedElement);

  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.posts .post.active');
for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
}

  /* get 'href' attribute from the clicked link */
  /* find the correct article using the selector (value of 'href' attribute) */
  /* add class 'active' to the correct article */

  const articleSelector = clickedElement.getAttribute('href');
  const targetArticle = document.querySelector(articleSelector);
  targetArticle.classList.add('active');
  console.log('Link was clicked!')
}

  /* for each article */

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';
  optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks(){


  const articles = document.querySelectorAll('.posts .post');

  let html = '';

  for(let article of articles){
      /* get the article id */
    const articleId = article.id;
    /* find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
  /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    html = html + linkHTML;
  }

  /* insert link into titleList */
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

}

generateTitleLinks();

function generateTags(){
  /* find all articles */

  const articles = article.querySelectorAll('.post-tags .list list-horizontal');

  /* START LOOP: for every article: */

  let html = '';

  for(let article of articles){

    /* find tags wrapper */

    const titleList = document.querySelector(optArticleTagsSelector)

    /* make html variable with empty string */

    /* get tags from data-tags attribute */

    /* split tags into array */
}
    /* START LOOP: for each tag */

      /* generate HTML of the link */

      /* add generated code to html variable */

    /* END LOOP: for each tag */

    /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */
}

generateTags();
