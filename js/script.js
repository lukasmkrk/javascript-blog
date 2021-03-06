'use strict';

function titleClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');
  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }
  /* [DONE] add class 'active' to the clicked link */
  clickedElement.classList.add('active');
  console.log('clickedElement:', clickedElement);
  /* [DONE] remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts .post.active');
  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }
  /* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);
  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
  console.log('Link was clicked!');
}
/* for each article */
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.data-author';

function generateTitleLinks(customSelector = '') {

  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  let html = '';

  for (let article of articles) {
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
  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }

}

generateTitleLinks();

function calculateTagsParams(allTags){
  for(let tag in tags){
    if(tags[tag] > params.max){
      params.max = tags[tag];
    }
  }
  return params;  //czy calculateTagsParams = tags ??//
}
  console.log(tag + ' is used ' + tags[tag] + ' times');

function generateTags() {
  /* [NEW] create a new variable allTags with an empty object */
  let allTags = {};
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /* START LOOP: for every article: */
  for (let article of articles) {
    /* find tags wrapper */
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    /* make html variable with empty string */
    let html = '';
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      /* generate HTML of the link */
      const linkHTML = '<a href="#tag-' + tag + '">' + tag + '</a>, ';
      /* add generated code to html variable */
      html = html + linkHTML;
      /* [NEW] check if this link is NOT already in allTags */
     if (!allTags.hasOwnProperty(tag)) {
       /* [NEW] add generated code to allTags array */
       allTags[tag] = 1;
     } else {
       allTags[tag]++;
     }
      /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    tagsWrapper.innerHTML = html;
    /* END LOOP: for every article: */
  }
  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector('.tags');

  const tagsParams = calculateTagsParams(allTags);
  console.log('tagsParams:', tagsParams);
}

  /* [NEW] create variable for all links in HTML code */
  let allTagsHTML = '';
  /* [NEW] START LOOP: for each tag in allTags:*/
  for (let tag in allTags) {
    /* [NEW] generate code of a link and add it to allTagsHTML */
    allTagsHTML += '<li><a class="tag-size-' + calculateTagClass(allTags[tag], tagsParams) + '" href="#' + tag + '">' + tag + '</a>' + '</li>';
  /* [NEW] END LOOP: for each tag in allTags: */
  }
  /* [NEW] add html from allTagsHTML to tagList */
  tagList.innerHTML = allTagsHTML;
}

generateTags();

function tagClickHandler(event) {
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#', '');
  /* find all tag links with class active */
  const tagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  /* START LOOP: for each active tag link */
  for (let tag of tagLinks) {
    /* remove class active */
    tag.classList.remove('active');
    /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const equalTagLink = document.querySelectorAll('a[href="' + href + '"]');
  /* START LOOP: for each found tag link */
  for (let tagLink of equalTagLink) {
    /* add class active */
    tagLink.classList.add('active');
    /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags() {
  /* find all links to tags */
  const linksTag = document.querySelectorAll('.list.tags a');
  /* START LOOP: for each link */
  for (let link of linksTag) {
    /* add tagClickHandler as event listener for that link */
    link.addEventListener('click', tagClickHandler);
    /* END LOOP: for each link */
  }
}

addClickListenersToTags();

function generateAuthors() {
  const articles = document.querySelectorAll(optArticleSelector);

  for (let article of articles) {
    const authorWrapper = article.querySelector(optArticleAuthorSelector);
    const articleAuthor = article.getAttribute('data-author');
    const linkHTML = 'by ' + '<a href="#by' + articleAuthor + '">' + articleAuthor + '</a>';

    authorWrapper.innerHTML = linkHTML;
  }
}

function authorClickHandler(event) {
  event.preventDefault();

  const clickedElement = this;
  const href = clickedElement.getAttribute('href');

  const author = href.replace('#by', '');

  // const author = href.replace('#by', '');
  const activeLinks = document.querySelectorAll('a.active[href^="#by"]');

  for (let activeAuthorLink of activeLinks) {
    activeAuthorLink.classList.remove('active');
  }

  const equalAuthorLinks = document.querySelectorAll('a[href="' + href + '"]');

  for (let foundAuthorLink of equalAuthorLinks) {
    foundAuthorLink.classList.add('active');
  }

  generateTitleLinks(`[data-author="${author}"]`);
}

function addClickListenersToAuthors() {
  const linksAuthor = document.querySelectorAll('.list.authors a');

  for (let link of linksAuthor) {
    link.addEventListener('click', authorClickHandler);
  }
}

generateAuthors();
addClickListenersToAuthors();
