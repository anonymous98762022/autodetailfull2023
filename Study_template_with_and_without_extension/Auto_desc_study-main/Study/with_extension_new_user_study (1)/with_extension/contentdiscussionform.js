// chrome.runtime.sendMessage({ todo: "showPageAction" }); //Send message to eventPage to highlight Icon

// //On startup check if the extension is enabled
// chrome.storage.local.get(["state"], (result) => {
//   // console.log("STARTUP CHECK")
//   state = result.state ? result.state : "OFF";
//   if (state == "ON") {
//     applyButtons();
//   }
// });

// //Enable the extension when triggered
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   console.log("GOT THE MESSAGE", request);
//   //When a new page is loaded
//   if (request.todo == "NewPageLoaded") {
//     //Check the document and if new nodes are added then apply the evet listener on them
//     MutationObserver = window.MutationObserver;
//     var observer = new MutationObserver((mutation, observer) => {
//       console.log("MUTATION");
//       //console.log("MUTATION",mutation,observer);
//       chrome.storage.local.get(["state"], (result) => {
//         var state = result.state ? result.state : "OFF";
//         if (state == "ON") {
//           applyButtons();
//         }
//       });
//     });
//     //Observe the entire product list node for any changes
//     observer.observe(
//       document.querySelector(
//         ".s-main-slot.s-result-list.s-search-results.sg-row"
//       ),
//       {
//         subtree: true,
//         childList: true,
//       }
//     );
//     // console.log("READY STATE",document.readyState)
//   } else if (request.todo == "changeTrigger") {
//     if (request.state == "ON") {
//       //Apply the EventListener(Click event) on all the <a> tags
//       applyButtons();
//     } else {
//       //Remove the EventListener(Click Event) on all the <a> tags
//       remove();
//     }
//   }
// });
// // To get the <a> tag
// const getParentAnchor = function (element) {
//   while (element !== null) {
//     if (element.tagName.toUpperCase() === "A") {
//       return element;
//     }
//     element = element.parentNode;
//   }
//   return null;
// };

// // To handle the click event
// const handleEvent = (event) => {
//   var anchor = getParentAnchor(event.target);
//   // console.log("anchor", anchor);
//   event.preventDefault(); //Prevent the href from loading the new page
//   var url = `https://www.amazon.com/${anchor.getAttribute("href")}`; //Generate our product info link
//   getDetails(url); //Get the details of the product and display the alert
// };
window.onload = () => {
  console.log("windows onload");


  //test();
  //applyButtons();
}  

var $commonWords = [
    'a',
    'about',
    'above',
    'across',
    'after',
    'again',
    'against',
    'all',
    'almost',
    'alone',
    'along',
    'already',
    'also',
    'although',
    'always',
    'among',
    'an',
    'and',
    'another',
    'any',
    'anybody',
    'anyone',
    'anything',
    'anywhere',
    'are',
    'area',
    'areas',
    'around',
    'as',
    'ask',
    'asked',
    'asking',
    'asks',
    'at',
    'away',
    'b',
    'back',
    'backed',
    'backing',
    'backs',
    'be',
    'became',
    'because',
    'become',
    'becomes',
    'been',
    'before',
    'began',
    'behind',
    'being',
    'beings',
    'best',
    'better',
    'between',
    'big',
    'both',
    'but',
    'by',
    'c',
    'came',
    'can',
    'cannot',
    'case',
    'cases',
    'certain',
    'certainly',
    'clear',
    'clearly',
    'come',
    'could',
    'd',
    'did',
    'differ',
    'different',
    'differently',
    'do',
    'does',
    'done',
    'down',
    'down',
    'downed',
    'downing',
    'downs',
    'during',
    'e',
    'each',
    'early',
    'either',
    'end',
    'ended',
    'ending',
    'ends',
    'enough',
    'even',
    'evenly',
    'ever',
    'every',
    'everybody',
    'everyone',
    'everything',
    'everywhere',
    'f',
    'face',
    'faces',
    'fact',
    'facts',
    'far',
    'felt',
    'few',
    'find',
    'finds',
    'first',
    'for',
    'four',
    'from',
    'full',
    'fully',
    'further',
    'furthered',
    'furthering',
    'furthers',
    'g',
    'gave',
    'general',
    'generally',
    'get',
    'gets',
    'give',
    'given',
    'gives',
    'go',
    'going',
    'good',
    'goods',
    'got',
    'great',
    'greater',
    'greatest',
    'group',
    'grouped',
    'grouping',
    'groups',
    'h',
    'had',
    'has',
    'have',
    'having',
    'he',
    'her',
    'here',
    'herself',
    'high',
    'high',
    'high',
    'higher',
    'highest',
    'him',
    'himself',
    'his',
    'how',
    'however',
    'i',
    'if',
    'important',
    'in',
    'interest',
    'interested',
    'interesting',
    'interests',
    'into',
    'is',
    'it',
    'its',
    'itself',
    'j',
    'just',
    'k',
    'keep',
    'keeps',
    'kind',
    'knew',
    'know',
    'known',
    'knows',
    'l',
    'large',
    'largely',
    'last',
    'later',
    'latest',
    'least',
    'less',
    'let',
    'lets',
    'like',
    'likely',
    'long',
    'longer',
    'longest',
    'm',
    'made',
    'make',
    'making',
    'man',
    'many',
    'may',
    'me',
    'member',
    'members',
    'men',
    'might',
    'more',
    'most',
    'mostly',
    'mr',
    'mrs',
    'much',
    'must',
    'my',
    'myself',
    'n',
    'necessary',
    'need',
    'needed',
    'needing',
    'needs',
    'never',
    'new',
    'new',
    'newer',
    'newest',
    'next',
    'no',
    'nobody',
    'non',
    'noone',
    'not',
    'nothing',
    'now',
    'nowhere',
    'number',
    'numbers',
    'o',
    'of',
    'off',
    'often',
    'old',
    'older',
    'oldest',
    'on',
    'once',
    'one',
    'only',
    'open',
    'opened',
    'opening',
    'opens',
    'or',
    'order',
    'ordered',
    'ordering',
    'orders',
    'other',
    'others',
    'our',
    'out',
    'over',
    'p',
    'part',
    'parted',
    'parting',
    'parts',
    'per',
    'perhaps',
    'place',
    'places',
    'point',
    'pointed',
    'pointing',
    'points',
    'possible',
    'present',
    'presented',
    'presenting',
    'presents',
    'problem',
    'problems',
    'put',
    'puts',
    'q',
    'quite',
    'r',
    'rather',
    'really',
    'right',
    'right',
    'room',
    'rooms',
    's',
    'said',
    'same',
    'saw',
    'say',
    'says',
    'second',
    'seconds',
    'see',
    'seem',
    'seemed',
    'seeming',
    'seems',
    'sees',
    'several',
    'shall',
    'she',
    'should',
    'show',
    'showed',
    'showing',
    'shows',
    'side',
    'sides',
    'since',
    'small',
    'smaller',
    'smallest',
    'so',
    'some',
    'somebody',
    'someone',
    'something',
    'somewhere',
    'state',
    'states',
    'still',
    'still',
    'such',
    'sure',
    't',
    'take',
    'taken',
    'than',
    'that',
    'the',
    'their',
    'them',
    'then',
    'there',
    'therefore',
    'these',
    'they',
    'thing',
    'things',
    'think',
    'thinks',
    'this',
    'those',
    'though',
    'thought',
    'thoughts',
    'three',
    'through',
    'thus',
    'to',
    'today',
    'together',
    'too',
    'took',
    'toward',
    'turn',
    'turned',
    'turning',
    'turns',
    'two',
    'u',
    'under',
    'until',
    'up',
    'upon',
    'us',
    'use',
    'used',
    'uses',
    'v',
    'very',
    'w',
    'want',
    'wanted',
    'wanting',
    'wants',
    'was',
    'way',
    'ways',
    'we',
    'well',
    'wells',
    'went',
    'were',
    'what',
    'when',
    'where',
    'whether',
    'which',
    'while',
    'who',
    'whole',
    'whose',
    'why',
    'will',
    'with',
    'within',
    'without',
    'work',
    'worked',
    'working',
    'works',
    'would',
    'x',
    'y',
    'year',
    'years',
    'yet',
    'you',
    'young',
    'younger',
    'youngest',
    'your',
    'yours',
    'z'
  ];

    

function getkeywords(text) {
   // var $text = text;
   // $text = $text.toLowerCase();

   //  // replace unnesessary chars. leave only chars, numbers and space
   //  $text = $text.replace(/[^\w\d ]/g, '');

   //  var result = $text.split(' ');

   //  // remove $commonWords
   //  result = result.filter(function (word) {
   //      return $commonWords.indexOf(word) === -1;
   //  });

   //  console.log(typeof result);
   //  // Unique words
   //  result = result.filter((item, i, ar) => ar.indexOf(item) === i); //[... new Set(result)];// result.unique();
   //  result = result.join(' ');
   result = ""

     var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("http://127.0.0.1:8090/"+text+"/", requestOptions)
    .then(response => response.text())
    .then(result => {console.log("abc"); console.log(result);
          return result; })
    .catch(error => console.log('error', error));

  

    //return result;   // The function returns the product of p1 and p2
}




function makeGetRequest(path) {
    return new Promise(function (resolve, reject) {

      var requestOptions = {
                method: 'GET',
                redirect: 'follow'
                    };

        fetch("http://127.0.0.1:8091/"+path+"/", requestOptions).
        then(response => response.text()).
        then(
            (result) => {
                var result = result;
                console.log('similarity');
                resolve(result);
            },
                (error) => {
                reject(error);
            }
        );
    });
}

async function getkeywordsmain() {
  console.log("button pressed");
  console.log("This is for comment section");
  //var cmtsection = document.querySelector("#spotim-specific > div:nth-child(6) > div").shadowRoot.querySelector("#spotim-specific-conversation > div > div.spcv_conversation > div.ToastWrapper__providerContainer > div:nth-child(2) > ul").textContent;
  var cmtsection = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul").textContent;
  //document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul")
  console.log(cmtsection);
  let cmtsection1 = "";
  //var comments_length = document.querySelector("#spotim-specific > div:nth-child(6) > div").shadowRoot.querySelector("#spotim-specific-conversation > div > div.spcv_conversation > div.ToastWrapper__providerContainer > div:nth-child(2) > ul").childElementCount;
  var comments_length = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul").childElementCount;


  var common_words_1 = []
  for(let i = 1; i <= comments_length; i++)
  {
        //var framer = "#spotim-specific-conversation > div > div.spcv_conversation > div.ToastWrapper__providerContainer > div:nth-child(2) > ul > li:nth-child("+ i + ") > article > div > div > div > div > div.components-MessageLayout-index__message-view > div > div.components-MessageContent-index__messageEntitiesWrapper > div > span > div";
        
        //getvals().then(response => {console.log(response); result =response });
        //var result = getkeywords($text);
        //var $text = document.querySelector("#spotim-specific > div:nth-child(6) > div").shadowRoot.querySelector("#spotim-specific-conversation > div > div.spcv_conversation > div.ToastWrapper__providerContainer > div:nth-child(2) > ul > li:nth-child("+ i +") > article > div > div > div > div > div.components-MessageLayout-index__message-view > div > div.components-MessageContent-index__messageEntitiesWrapper > div > span > div").textContent;
           
        try { // statements to try
            var $text = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul > li:nth-child("+ i +") > article > div > div > div > div > div.components-MessageLayout-index__message-view > div > div.components-MessageContent-index__messageEntitiesWrapper > div > span > div").textContent;

        }
        catch (e) {
            var $text = 'unknown';
                //logMyErrors(e); // pass exception object to error handler (i.e. your own function)
        }



        for(let i_1 = i+1; i_1 <= comments_length; i_1++)
        {
              
              try { // statements to try
                var $text1 = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul > li:nth-child("+ i_1 +") > article > div > div > div > div > div.components-MessageLayout-index__message-view > div > div.components-MessageContent-index__messageEntitiesWrapper > div > span > div").textContent;
              }
              catch (e) {
                var $text1 = 'unknown';
                //logMyErrors(e); // pass exception object to error handler (i.e. your own function)
              }

                console.log($text)
                console.log($text1)

                let $text3 = $text + " @@ " + $text1
                $text3 = $text3.replace("#", "");
                $text3 = $text3.replace("?", "");

                console.log($text3)
                var result = await makeGetRequest($text3);
                console.log(result)
                
                if(parseFloat(result) >=  0.2 )
                {

                  try { // statements to try
                      document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul > li:nth-child("+ i_1 +") > article > div > div > div > div > div.components-MessageLayout-index__message-view > div > div.components-MessageContent-index__messageEntitiesWrapper > div > span > div").innerHTML = ""
                  }
                  catch (e) {
                    console.log("unable to write innerhtml")
                  }


                }


                /*
                 var requestOptions = {
                method: 'GET',
                redirect: 'follow'
                    };
                
              fetch("http://127.0.0.1:8091/"+$text3+"/", requestOptions)
                .then(response => response.text())
                .then(result => { 
                      

                      console.log(" similarity is ")
                      console.log(result)
                      //document.querySelector("#spotim-specific > div:nth-child(6) > div").shadowRoot.querySelector("#spotim-specific-conversation > div > div.spcv_conversation > div.ToastWrapper__providerContainer > div:nth-child(2) > ul > li:nth-child("+ i +") > article > div > div > div > div > div.components-MessageLayout-index__message-view > div > div.components-MessageContent-index__messageEntitiesWrapper > div > span > div").innerHTML = result; //"keyword1 keyword2 keyword3"
                      
                      //document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-3 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-3 > div:nth-child(2) > ul > li:nth-child("+ i +") > article > div > div > div > div > div.components-MessageLayout-index__message-view > div > div.components-MessageContent-index__messageEntitiesWrapper > div > span > div").innerHTML = result; //"keyword1 keyword2 keyword3"

                      //cmtsection1 = document.querySelector("#spotim-specific > div:nth-child(6) > div").shadowRoot.querySelector("#spotim-specific-conversation > div > div.spcv_conversation > div.ToastWrapper__providerContainer > div:nth-child(2) > ul > li:nth-child("+ i +") > article > div > div > div > div > div.components-MessageLayout-index__message-view > div > div.components-MessageContent-index__messageEntitiesWrapper > div > span > div").textContent;
                      //console.log(cmtsection1);

                    })
                .catch(error => console.log('error', error));
                */


      }





/*

    //reply part addition

      //var reply_length = document.querySelector("#spotim-specific > div:nth-child(6) > div").shadowRoot.querySelector("#spotim-specific-conversation > div > div.spcv_conversation > div.ToastWrapper__providerContainer > div:nth-child(2) > ul > li:nth-child("+ i +") > article > div > div > ul").childElementCount 
      var reply_length = document.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-3 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-3 > div:nth-child(2) > ul > li:nth-child("+i+") > article > div > div > ul").childElementCount;
        //console.log(reply_length);
          for(let j = 1; j <= reply_length; j++)
            {
              //var reply_text = document.querySelector("#spotim-specific > div:nth-child(6) > div").shadowRoot.querySelector("#spotim-specific-conversation > div > div.spcv_conversation > div.ToastWrapper__providerContainer > div:nth-child(2) > ul > li:nth-child("+ i +") > article > div > div > ul > li:nth-child("+ j +") > div.spcv_messageStackWrapper.spcv_firstReply.spcv_threadingLine > div > div.components-MessageLayout-index__appearance-component > div > div.components-MessageLayout-index__message-view > div > div.components-MessageContent-index__messageEntitiesWrapper > div > span > div").textContent;
              var reply_text = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-3 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-3 > div:nth-child(2) > ul > li:nth-child("+j+") > article > div > div > ul > li:nth-child(1) > div.spcv_messageStackWrapper.spcv_firstReply.spcv_threadingLine > div > div.components-MessageLayout-index__appearance-component > div > div.components-MessageLayout-index__message-view > div > div.components-MessageContent-index__messageEntitiesWrapper").textContent;
              //console.log(reply_text);

                 var requestOptions1 = {
                method: 'GET',
                redirect: 'follow'
                    };
                        fetch("http://127.0.0.1:8090/"+reply_text+"/", requestOptions1)
            .then(response => response.text())
            .then(result => { 
                  
                  console.log(result)
                  //document.querySelector("#spotim-specific > div:nth-child(6) > div").shadowRoot.querySelector("#spotim-specific-conversation > div > div.spcv_conversation > div.ToastWrapper__providerContainer > div:nth-child(2) > ul > li:nth-child("+ i +") > article > div > div > ul > li:nth-child("+ j +") > div.spcv_messageStackWrapper.spcv_firstReply.spcv_threadingLine > div > div.components-MessageLayout-index__appearance-component > div > div.components-MessageLayout-index__message-view > div > div.components-MessageContent-index__messageEntitiesWrapper > div > span > div").innerHTML = result; //"keyword1 keyword2 keyword3"
                  document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-3 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-3 > div:nth-child(2) > ul > li:nth-child("+j+") > article > div > div > ul > li:nth-child(1) > div.spcv_messageStackWrapper.spcv_firstReply.spcv_threadingLine > div > div.components-MessageLayout-index__appearance-component > div > div.components-MessageLayout-index__message-view > div > div.components-MessageContent-index__messageEntitiesWrapper").innerHTML = result;
                  //cmtsection1 = document.querySelector("#spotim-specific > div:nth-child(6) > div").shadowRoot.querySelector("#spotim-specific-conversation > div > div.spcv_conversation > div.ToastWrapper__providerContainer > div:nth-child(2) > ul > li:nth-child("+ i +") > article > div > div > div > div > div.components-MessageLayout-index__message-view > div > div.components-MessageContent-index__messageEntitiesWrapper > div > span > div").textContent;
                  //console.log(cmtsection1);

                })
            .catch(error => console.log('error', error));
            }


*/


    // reply part ending


    // console.log(result)
    // document.querySelector("#spotim-specific > div:nth-child(6) > div").shadowRoot.querySelector("#spotim-specific-conversation > div > div.spcv_conversation > div.ToastWrapper__providerContainer > div:nth-child(2) > ul > li:nth-child("+ i +") > article > div > div > div > div > div.components-MessageLayout-index__message-view > div > div.components-MessageContent-index__messageEntitiesWrapper > div > span > div").innerHTML = result; //"keyword1 keyword2 keyword3"
    // cmtsection1 = document.querySelector("#spotim-specific > div:nth-child(6) > div").shadowRoot.querySelector("#spotim-specific-conversation > div > div.spcv_conversation > div.ToastWrapper__providerContainer > div:nth-child(2) > ul > li:nth-child("+ i +") > article > div > div > div > div > div.components-MessageLayout-index__message-view > div > div.components-MessageContent-index__messageEntitiesWrapper > div > span > div").textContent;
    // //console.log(cmtsection1);
    //console.log(cmtsection1);
    //console.log("working");
  }
}



async function getkeywordsmain_1(similarity_text) 
{
  console.log("button pressed");
  console.log("This is for comment section");
  //var cmtsection = document.querySelector("#spotim-specific > div:nth-child(6) > div").shadowRoot.querySelector("#spotim-specific-conversation > div > div.spcv_conversation > div.ToastWrapper__providerContainer > div:nth-child(2) > ul").textContent;
  var cmtsection = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul").textContent;
  //document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul")
  console.log(cmtsection);
  let cmtsection1 = "";
  //var comments_length = document.querySelector("#spotim-specific > div:nth-child(6) > div").shadowRoot.querySelector("#spotim-specific-conversation > div > div.spcv_conversation > div.ToastWrapper__providerContainer > div:nth-child(2) > ul").childElementCount;
  var comments_length = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul").childElementCount;


  var common_words_1 = []


        for(let i_1 = 1; i_1 <= comments_length; i_1++)
        {
              
              try { // statements to try
                var $text1 = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul > li:nth-child("+ i_1 +") > article > div > div > div > div > div.components-MessageLayout-index__message-view > div > div.components-MessageContent-index__messageEntitiesWrapper > div > span > div").textContent;
              }
              catch (e) {
                var $text1 = 'unknown';
                //logMyErrors(e); // pass exception object to error handler (i.e. your own function)
              }

                
                //console.log($text1)

                let $text3 = similarity_text + " @@ " + $text1
                $text3 = $text3.replace("#", "");
                $text3 = $text3.replace("?", "");

                console.log($text3)
                var result = await makeGetRequest($text3);
                console.log(result)
                
                if(parseFloat(result) <=  0.11 )
                {

                  try { // statements to try
                      document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul > li:nth-child("+ i_1 +") > article > div > div > div > div > div.components-MessageLayout-index__message-view > div > div.components-MessageContent-index__messageEntitiesWrapper > div > span > div").style.display = 'none';
                  }
                  catch (e) {
                    console.log("unable to write innerhtml")
                  }


                }

          }
}




function reset() 
{
  //console.log("button pressed");
  //console.log("This is for comment section");
  //var cmtsection = document.querySelector("#spotim-specific > div:nth-child(6) > div").shadowRoot.querySelector("#spotim-specific-conversation > div > div.spcv_conversation > div.ToastWrapper__providerContainer > div:nth-child(2) > ul").textContent;
  var cmtsection = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul").textContent;
  //document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul")
  //console.log(cmtsection);
  let cmtsection1 = "";
  //var comments_length = document.querySelector("#spotim-specific > div:nth-child(6) > div").shadowRoot.querySelector("#spotim-specific-conversation > div > div.spcv_conversation > div.ToastWrapper__providerContainer > div:nth-child(2) > ul").childElementCount;
  var comments_length = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul").childElementCount;


  var common_words_1 = []


        for(let i_1 = 1; i_1 <= comments_length; i_1++)
        {
              
  

                  try 
                  { // statements to try
                      document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul > li:nth-child("+ i_1 +") > article > div > div > div > div > div.components-MessageLayout-index__message-view > div > div.components-MessageContent-index__messageEntitiesWrapper > div > span > div").style.display = 'block';
                      document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul > li:nth-child("+ i_1 +")").style.display = 'block';

                  }
                  catch (e) {
                    console.log("unable to display block")
                  }


                

          }
}


function user_remove(username)
{
        var cmtsection = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul").textContent;
        //document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul")
        //console.log(cmtsection);
        let cmtsection1 = "";
        //var comments_length = document.querySelector("#spotim-specific > div:nth-child(6) > div").shadowRoot.querySelector("#spotim-specific-conversation > div > div.spcv_conversation > div.ToastWrapper__providerContainer > div:nth-child(2) > ul").childElementCount;
        var comments_length = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul").childElementCount;


        var common_words_1 = []


        for(let i_1 = 1; i_1 <= comments_length; i_1++)
        {
              
                

                  try 
                  { // statements to try
                      //document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul > li:nth-child("+ i_1 +") > article > div > div > div > div > div.components-MessageLayout-index__message-view > div > div.components-MessageContent-index__messageEntitiesWrapper > div > span > div").style.display = 'block';
                    if ( username == document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul > li:nth-child("+ i_1 +") > article > div > div > div.components-MessageLayout-index__appearance-component > div > div.components-MessageLayout-index__message-view > div > div.components-common-MessageRow-index__messageRow.components-MessageDetails-index__message-details-wrapper > div.components-common-MessageCol-index__messageCol.components-MessageDetails-index__left > div > span > div > button > span > span").textContent )
                    {
                      document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul > li:nth-child("+ i_1 +")").style.display = 'none';
                    }
                  }
                  catch (e) {
                    console.log("unable to display block")
                  }


                

          }

}


function reorder_comments()
{
        var cmtsection = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul").textContent;
        //document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul")
        //console.log(cmtsection);
        let cmtsection1 = "";
        //var comments_length = document.querySelector("#spotim-specific > div:nth-child(6) > div").shadowRoot.querySelector("#spotim-specific-conversation > div > div.spcv_conversation > div.ToastWrapper__providerContainer > div:nth-child(2) > ul").childElementCount;
        var comments_length = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul").childElementCount;


        var common_words_1 = []


        for(let i_1 = 1; i_1 <= comments_length; i_1++)
        {
              
                

                  try 
                  { // statements to try
                      //document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul > li:nth-child("+ i_1 +") > article > div > div > div > div > div.components-MessageLayout-index__message-view > div > div.components-MessageContent-index__messageEntitiesWrapper > div > span > div").style.display = 'block';
                    if ( document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul > li:nth-child("+ i_1 +") > article > div > div > div > div > div.components-MessageLayout-index__message-view > div > div.components-MessageContent-index__messageEntitiesWrapper > div > span > div").style.display == 'none' )
                    {
                        document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul > li:nth-child("+ i_1 +")").style.display = 'none';
                    }
                  }
                  catch (e) {
                    console.log("unable to display block")
                  }


                

          }

}

async function positive_semantic() 
{
  console.log("button pressed");
  console.log("This is for comment section");
  //var cmtsection = document.querySelector("#spotim-specific > div:nth-child(6) > div").shadowRoot.querySelector("#spotim-specific-conversation > div > div.spcv_conversation > div.ToastWrapper__providerContainer > div:nth-child(2) > ul").textContent;
  var cmtsection = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul").textContent;
  //document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul")
  console.log(cmtsection);
  let cmtsection1 = "";
  //var comments_length = document.querySelector("#spotim-specific > div:nth-child(6) > div").shadowRoot.querySelector("#spotim-specific-conversation > div > div.spcv_conversation > div.ToastWrapper__providerContainer > div:nth-child(2) > ul").childElementCount;
  var comments_length = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul").childElementCount;


  var common_words_1 = []


        for(let i_1 = 1; i_1 <= comments_length; i_1++)
        {
              
              try { // statements to try
                var $text1 = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul > li:nth-child("+ i_1 +") > article > div > div > div > div > div.components-MessageLayout-index__message-view > div > div.components-MessageContent-index__messageEntitiesWrapper > div > span > div").textContent;
              }
              catch (e) {
                var $text1 = 'unknown unknown unknown unknown';
                //logMyErrors(e); // pass exception object to error handler (i.e. your own function)
              }

                
                //console.log($text1)

                let $word = "[findsemantic] "
                let $text3 = $word + $text1 


                console.log($text3)
                //$text3 = $text3.replace("#", "")
                var result = await makeGetRequest($text3);
                console.log(result)
                
                if(parseInt(result) ==  0 )
                {

                  try { // statements to try
                      document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul > li:nth-child("+ i_1 +") > article > div > div > div > div > div.components-MessageLayout-index__message-view > div > div.components-MessageContent-index__messageEntitiesWrapper > div > span > div").style.display = 'none';
                  }
                  catch (e) {
                    console.log("unable to write innerhtml")
                  }


                }

          }
}



async function negative_semantic() 
{
  console.log("button pressed");
  console.log("This is for comment section");
  //var cmtsection = document.querySelector("#spotim-specific > div:nth-child(6) > div").shadowRoot.querySelector("#spotim-specific-conversation > div > div.spcv_conversation > div.ToastWrapper__providerContainer > div:nth-child(2) > ul").textContent;
  var cmtsection = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul").textContent;
  //document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul")
  console.log(cmtsection);
  let cmtsection1 = "";
  //var comments_length = document.querySelector("#spotim-specific > div:nth-child(6) > div").shadowRoot.querySelector("#spotim-specific-conversation > div > div.spcv_conversation > div.ToastWrapper__providerContainer > div:nth-child(2) > ul").childElementCount;
  var comments_length = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul").childElementCount;


  var common_words_1 = []


        for(let i_1 = 1; i_1 <= comments_length; i_1++)
        {
              
              try { // statements to try
                var $text1 = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul > li:nth-child("+ i_1 +") > article > div > div > div > div > div.components-MessageLayout-index__message-view > div > div.components-MessageContent-index__messageEntitiesWrapper > div > span > div").textContent;
              }
              catch (e) {
                var $text1 = 'unknown unknown unknown unknown';
                //logMyErrors(e); // pass exception object to error handler (i.e. your own function)
              }

                
                //console.log($text1)

                let $word = "[findsemantic] "
                let $text3 = $word + $text1 


                console.log($text3)
                //$text3 = $text3.replace("#", "")
                var result = await makeGetRequest($text3);
                console.log(result)
                
                if(parseInt(result) ==  1 )
                {

                  try { // statements to try
                      document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-14 > div:nth-child(2) > ul > li:nth-child("+ i_1 +") > article > div > div > div > div > div.components-MessageLayout-index__message-view > div > div.components-MessageContent-index__messageEntitiesWrapper > div > span > div").style.display = 'none';
                  }
                  catch (e) {
                    console.log("unable to write innerhtml")
                  }


                }

          }
}



document.querySelector("body").addEventListener("click", function() {



  //getkeywordsmain();

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };


 var conversation_section = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.spcv_conversation-header > div > div > div");
 var textsimilarity_textbox = conversation_section.querySelector('.textsimilarity_textbox_class') === null; //Check if button already exists
 if (textsimilarity_textbox) {
      var textsimilarity_textbox1 = document.createElement("input");
      textsimilarity_textbox1.setAttribute("type", "text");
      textsimilarity_textbox1.setAttribute("placeholder", "Text similarity");
      textsimilarity_textbox1.setAttribute("class", "textsimilarity_textbox_class");
      textsimilarity_textbox1.setAttribute("id", "textsimilarity_textbox_id");
      textsimilarity_textbox1.style.width = '100px'
      conversation_section.append(textsimilarity_textbox1);
    }

  var conversation_section = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.spcv_conversation-header > div > div > div");
  var userthreadremoval_textbox = conversation_section.querySelector('.userthreadremoval_textbox_class') === null; //Check if button already exists
  if (userthreadremoval_textbox) {
      var userthreadremoval_textbox1 = document.createElement("input");
      userthreadremoval_textbox1.setAttribute("type", "text");
      userthreadremoval_textbox1.setAttribute("placeholder", "User removal");
      userthreadremoval_textbox1.setAttribute("class", "userthreadremoval_textbox_class");
      userthreadremoval_textbox1.setAttribute("id", "userthreadremoval_textbox_id");
      userthreadremoval_textbox1.style.width = '100px'
      conversation_section.append(userthreadremoval_textbox1);
    }


  var conversation_section = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.spcv_conversation-header > div > div > div");
  var textsimilarity_submitbutton = conversation_section.querySelector('.textsimilarity_submitbutton_class') === null; //Check if button already exists
  if (textsimilarity_submitbutton) {
      var textsimilarity_submitbutton1 = document.createElement("input");
      textsimilarity_submitbutton1.setAttribute("type", "button");
      textsimilarity_submitbutton1.setAttribute("value", "Submit");
      textsimilarity_submitbutton1.setAttribute("class", "textsimilarity_submitbutton_class");
      textsimilarity_submitbutton1.setAttribute("id", "textsimilarity_submitbutton_id");
/*      textsimilarity_submitbutton1.style.background-color = '#c2fbd7';
      textsimilarity_submitbutton1.style.border-radius= '100px';
      textsimilarity_submitbutton1.style.box-shadow= 'rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px';
      textsimilarity_submitbutton1.style.color= 'green';
      textsimilarity_submitbutton1.style.cursor= 'pointer';
      textsimilarity_submitbutton1.style.display= 'inline-block';
      textsimilarity_submitbutton1.style.font-family=  'CerebriSans-Regular,-apple-system,system-ui,Roboto,sans-serif';
      textsimilarity_submitbutton1.style.padding= '7px 20px';
      textsimilarity_submitbutton1.style.text-align= 'center';
      textsimilarity_submitbutton1.style.text-decoration= 'none';
      textsimilarity_submitbutton1.style.transition= 'all 250ms';
      textsimilarity_submitbutton1.style.border= '0';
      textsimilarity_submitbutton1.style.font-size= '16px';
      textsimilarity_submitbutton1.style.user-select= 'none';
      textsimilarity_submitbutton1.style.-webkit-user-select= 'none';
      textsimilarity_submitbutton1.style.touch-action= 'manipulation';*/

      conversation_section.append(textsimilarity_submitbutton1);
    }


  var conversation_section = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.spcv_conversation-header > div > div > div");
  var reset_button = conversation_section.querySelector('.reset_button_class') === null; //Check if button already exists
  if (reset_button) {
      var reset_button1 = document.createElement("input");
      reset_button1.setAttribute("type", "button");
      reset_button1.setAttribute("value", "Reset");
      reset_button1.setAttribute("class", "reset_button_class");
      reset_button1.setAttribute("id", "reset_button_id");
      conversation_section.append(reset_button1);
    }


  var conversation_section = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.spcv_conversation-header > div > div > div");
  var reorder_button = conversation_section.querySelector('.reorder_button_class') === null; //Check if button already exists
  if (reorder_button) {
      var reorder_button1 = document.createElement("input");
      reorder_button1.setAttribute("type", "button");
      reorder_button1.setAttribute("value", "Reorder");
      reorder_button1.setAttribute("class", "reorder_button_class");
      reorder_button1.setAttribute("id", "reorder_button_id");
      conversation_section.append(reorder_button1);
    }

  var conversation_section = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.spcv_conversation-header > div > div > div");
  var positive_button = conversation_section.querySelector('.positive_button_class') === null; //Check if button already exists
  if (positive_button) {
      var positive_button1 = document.createElement("input");
      positive_button1.setAttribute("type", "button");
      positive_button1.setAttribute("value", "Positive");
      positive_button1.setAttribute("class", "positive_button_class");
      positive_button1.setAttribute("id", "positive_button_id");
      conversation_section.append(positive_button1);
    }

  var conversation_section = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.spcv_conversation-header > div > div > div");
  var negative_button = conversation_section.querySelector('.negative_button_class') === null; //Check if button already exists
  if (negative_button) {
      var negative_button1 = document.createElement("input");
      negative_button1.setAttribute("type", "button");
      negative_button1.setAttribute("value", "negative");
      negative_button1.setAttribute("class", "negative_button_class");
      negative_button1.setAttribute("id", "negative_button_id");
      conversation_section.append(negative_button1);
    }



  var below_conversation_section = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation");
  var question_textbox = below_conversation_section.querySelector('.question_textbox_class') === null; //Check if button already exists
  if (question_textbox) {
      var question_textbox1 = document.createElement("input");
      question_textbox1.setAttribute("type", "text");
      question_textbox1.setAttribute("placeholder", "Enter your question");
      question_textbox1.setAttribute("class", "question_textbox_class");
      question_textbox1.setAttribute("id", "question_textbox_id");
      question_textbox1.style.width = '785px'
      below_conversation_section.insertBefore(question_textbox1, below_conversation_section.children[0]);
    }


  var below_conversation_section = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-14 > div.spcv_conversation");
  var answer_label = below_conversation_section.querySelector('.answer_label_class') === null; //Check if button already exists
  if (answer_label) {
      var answer_label1 = document.createElement("LABEL");
      answer_label1.innerHTML = "Answer text will be displaced here";
      answer_label1.setAttribute("class", "answer_label_class");
      answer_label1.setAttribute("id", "answer_label_id");
      answer_label1.style.width = '788px';
      answer_label1.style.height = '50px';
      below_conversation_section.insertBefore(answer_label1, below_conversation_section.children[1]);
    }


  var textsimilarity_submitbutton_test = !!conversation_section.querySelector('.textsimilarity_submitbutton_class'); //Check if button already exists
  if (textsimilarity_submitbutton_test)
  {

        conversation_section.querySelector('.textsimilarity_submitbutton_class').addEventListener("click", () => {
          //getkeywordsmain();
          console.log("button pressed");

        if (!(conversation_section.querySelector('.textsimilarity_textbox_class').value.trim() == ""))
        {
            getkeywordsmain_1(conversation_section.querySelector('.textsimilarity_textbox_class').value);
        }

        if (!(conversation_section.querySelector('.userthreadremoval_textbox_class').value.trim() == ""))
        {
            //getkeywordsmain_1(conversation_section.querySelector('.textsimilarity_textbox_class').value);
            user_remove(conversation_section.querySelector('.userthreadremoval_textbox_class').value);
        }


        })

  }




  var reset_button_test = !!conversation_section.querySelector('.reset_button_class'); //Check if button already exists
  if (reset_button_test)
  {
    conversation_section.querySelector('.reset_button_class').addEventListener("click", () => {
    //getkeywordsmain();
    console.log("button pressed");
    //getkeywordsmain_1(conversation_section.querySelector('.textsimilarity_textbox_class').value);
    reset();
   })
  }


  var reorder_button_test = !!conversation_section.querySelector('.reorder_button_class'); //Check if button already exists
  if (reorder_button_test)
  {
    conversation_section.querySelector('.reorder_button_class').addEventListener("click", () => {
    //getkeywordsmain();
    console.log("button pressed");
    reorder_comments();
    //getkeywordsmain_1(conversation_section.querySelector('.textsimilarity_textbox_class').value);
    //reset();
   })
  }


  var positive_button_test = !!conversation_section.querySelector('.positive_button_class'); //Check if button already exists
  if (positive_button_test)
  {
    conversation_section.querySelector('.positive_button_class').addEventListener("click", () => {
    //getkeywordsmain();
    //console.log("button pressed");
    reset();


        if (!(conversation_section.querySelector('.textsimilarity_textbox_class').value.trim() == ""))
        {
            getkeywordsmain_1(conversation_section.querySelector('.textsimilarity_textbox_class').value);
        }

        if (!(conversation_section.querySelector('.userthreadremoval_textbox_class').value.trim() == ""))
        {
            //getkeywordsmain_1(conversation_section.querySelector('.textsimilarity_textbox_class').value);
            user_remove(conversation_section.querySelector('.userthreadremoval_textbox_class').value);
        }

    positive_semantic();
    reorder_comments();
    //getkeywordsmain_1(conversation_section.querySelector('.textsimilarity_textbox_class').value);
    //reset();
   })
  }


  var negative_button_test = !!conversation_section.querySelector('.negative_button_class'); //Check if button already exists
  if (negative_button_test)
  {
    conversation_section.querySelector('.negative_button_class').addEventListener("click", () => {
    //getkeywordsmain();
    //console.log("button pressed");
    reset();


        if (!(conversation_section.querySelector('.textsimilarity_textbox_class').value.trim() == ""))
        {
            getkeywordsmain_1(conversation_section.querySelector('.textsimilarity_textbox_class').value);
        }

        if (!(conversation_section.querySelector('.userthreadremoval_textbox_class').value.trim() == ""))
        {
            //getkeywordsmain_1(conversation_section.querySelector('.textsimilarity_textbox_class').value);
            user_remove(conversation_section.querySelector('.userthreadremoval_textbox_class').value);
        }
    negative_semantic();
    reorder_comments();
    //getkeywordsmain_1(conversation_section.querySelector('.textsimilarity_textbox_class').value);
    //reset();
   })
  }

/*
  fetch("http://127.0.0.1:8090/hello/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
*/

 // var comment_section = document.querySelector("#spotim-specific > div:nth-child(7) > div").shadowRoot.querySelector("div > div > div > div > div > div > div.ToastWrapper__providerContainer--11-1-3 > div.spcv_conversation > div.ToastWrapper__providerContainer--11-1-3 > div:nth-child(2) > ul");
/*
  var buttonElement1 =
      comment_section.querySelector('.addedButton1') === null; //Check if button already exists
    if (buttonElement1) {
      var button1 = document.createElement("input");
      button1.setAttribute("type", "button");
      button1.setAttribute("value", "Get Keywords");
      button1.setAttribute("class", "addedButton1");

      comment_section.append(button1);
    }



   button1.addEventListener("click", () => {
    getkeywordsmain();
   })
*/
});

document.querySelector("#spotim-specific > div:nth-child(6) > div").shadowRoot.querySelector("#spotim-specific-conversation > div > div.spcv_conversation > div:nth-child(5) > div > button").addEventListener("click", function() {

  getkeywordsmain();

});



const test = () => {

  var cmt = document.querySelector("#__next > div.relative > main > article > div.article-body > div.remainder-content > section > div:nth-child(67) > div > p").textContent
  console.log("This is for testing purpose");
  
  //var cmtsection = document.querySelector("#__next > div.relative > main > article > div.article-body > div.remainder-content > section > div:nth-child(67) > div > p").textContent;
  console.log("This is for comment section");


  //console.log(cmtsection);

}






const applyButtons = () => {
  var divs = document.querySelectorAll(`h2 .a-link-normal.a-text-normal`);
  console.log('i came inside apply buttons');
  console.log(' divs ');
  console.log(divs);
  divs.forEach((div) => {
    console.log('i came inside inside apply buttons');
    var buttonElement =
      div.parentNode.parentNode.querySelector(`.addedButton`) === null; //Check if button already exists
    if (buttonElement) {
      console.log('i came inside inside inside');
      //If it doesnt exist then add it
      var button = document.createElement("input");
      var newDiv = document.createElement("div");
      newDiv.setAttribute('style', 'white-space:pre-wrap');
      var body = document.createElement("div");
      body.setAttribute('style', 'white-space:pre-wrap');
      //newDiv.setAttribute('id', 'main')
      //var ul = document.createElement('ul');
      // ul.setAttribute('id', 'prolist');
      // var tbl = document.createElement("table");
      // var tblBody = document.createElement("tbody");

      
    
      var url = `https://www.amazon.com${div.getAttribute("href")}`;
      button.setAttribute("type", "button");
      button.setAttribute("value", "Get Details");
      button.setAttribute("class", "addedButton");
      // div.setAttribute("id", "NewInfoDiv");
      // button.setAttribute("name", "CLICK MEEEEEEEE");
      button.addEventListener("click", () => {
        getDetails(url,newDiv,body);
        console.log('checked');
        //app(url);
      });
      div.parentNode.parentNode.append(button);
      div.parentNode.parentNode.append(newDiv);
      
      
      //newDiv.appendChild(ul); 
      div.parentNode.parentNode.append(body);
      // body.appendChild(tbl);
      console.log('checked1');
    }
  });
};

// Get the details of the product
const getDetails = (url, newDiv,body) => {
  // console.log("THE NEW DIV",newDiv)
  if (newDiv.classList.contains("visibleInfo")) {
    newDiv.classList.remove("visibleInfo");
    newDiv.classList.add("InvisibleInfo");
  } else {
    if (newDiv.innerHTML) {
      //If the data is already fetched just change the class so the newDiv info is visible
      newDiv.classList.add("visibleInfo");
      newDiv.classList.remove("InvisibleInfo");
    } else {
      //If no info has been fetched, fetch it and then populate newDiv
      newDiv.innerHTML = "FETCHING NEW DATA"; //Just change the text to show that data is being fetched
      fetch(url) //Get request of the generated url
        .then((res) => res.text()) // use the .text() of res (object) to convert the byte stream into plain text
        .then((text) => {
          var parser = new DOMParser(); //DomParser API
          var doc = parser.parseFromString(text, "text/html"); //parse into DOM query-able form
          var items = doc.querySelectorAll(
            ".a-unordered-list.a-vertical.a-spacing-mini span.a-list-item"
          ); //Query the details of the product
          var info = "";
          //Generate the new info to be displayed on the alert
          items.forEach((element) => {
            //info += element.innerHTML;
            var list = document.createElement('li');
            body.appendChild(list);
            list.innerHTML += element.innerHTML;

          });
          // document.querySelector(`NewInfoDiv`)
          // alert(info); // Make an alert to display the product info
          newDiv.innerHTML = info;
          //Set the className to visibleInfo
          newDiv.setAttribute("class", "visibleInfo");
        })
        // If there is an error catch it and display it as an alert
        .catch((err) => (newDiv.innerHTML = err));
    }
  }
};
              
// var el = document.getElementById("nav-subnav");
// if(el){
//   el.addEventListener("click", function(){ console.log("clicked"); console.log("i am moving"); applyButtons(); });
// }
