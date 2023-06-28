var needsLoading = true;

//Animate Tasks
var tasks = {};
tasks.action = [
  'Loading',
  'Generating',
  'Deleting',
  'Cutting',
  'Connecting',
  'Pushing',
  'Crashing',
  'Installing',
  'Pulling',
  'Swimming',
  'Moving',
  'Watching',
  'Following',
  'Liking',
  'Processing',
  'Winning',
  'Twitting',
  'Posting',
  'Judging',
  'Cleaning',
  'Mopping',
  'Skipping',
  'Correcting',
  'Disliking',
  'Unfollowing',
  'Gathering',
  'Frying',
  'Asking',
  'Bypassing',
  'Stealing',
  'Hacking',
  'Petting'

];


tasks.subject = [
  'Kittens',
  'Bad pictures',
  'Ugly fonts',
  'Netflix',
  'Facebook fans',
  'Instagram follower',
  'Twitter',
  'Entire Google Database',
  'Selfies',
  'Cats',
  'Chihuahuas',
  'Fake news',
  'Whale screams',
  'Sunglasses',
  'Twelve legged dogs',
  'Grandmas fennel salad',
  'Colours',
  'Brussel Sprouts',
  'Irrelevant questions',
  'Preposterous ',
  'TV Shows',
  'Britney Spears',
  'Surroundings',
  'Security restrictions',
  'User webcam without consent',
  'User Credit card'
];


tasks.result = [
  'Successful',
  'Done',
  'Completed',
  'Nailed',
  'Cracked',
  'Too lazy to do it',
  'EO340 Permission Denied',
  'Warning, Dangerous contents',
  'Failed',
  'Not Found',
  'Fatal Error'
];



var dosLoading = document.getElementById('dosLoading');
var taskList = document.getElementById('taskList');


var tasksLength = 120;
var iter = 0.3;
var taskSpeed = 1;

function getRandomIndexOfArray(arrayLenght) {
  return Math.floor(Math.random() * Math.floor(arrayLenght));
}


function runTasks(){
  var list = document.createElement('li');
  var action = tasks.action[getRandomIndexOfArray(tasks.action.length)];
  var subject = tasks.subject[getRandomIndexOfArray(tasks.subject.length)];
  var resultIndex = getRandomIndexOfArray(tasks.result.length);
  var result = tasks.result[resultIndex];

  var sentence = action+" "+subject+": "+result;

  //list.appendChild(document.createTextNode("Task "+iter));

  list.appendChild(document.createTextNode(sentence));
  taskList.appendChild(list);

  //Highligh if if a failed task
  if (resultIndex > 7) {
    list.style.color = 'var(--yellow )';
  }
  dosLoading.scrollTop = dosLoading.scrollHeight;
  iter ++;
  if (iter < tasksLength) {
      //between 0 to 400 milliseconds
      var fakeWorkloadTime = (Math.random()*100)*taskSpeed;
      //goes faster the more it loads
      if(iter % 10){
        fakeWorkloadTime = fakeWorkloadTime/(iter/10);
      }else {
        fakeWorkloadTime = fakeWorkloadTime*(iter/10);
      }
      setTimeout(runTasks, fakeWorkloadTime);
  }else {
    setTimeout(fullyLoaded, 100);
  }
}


function fullyLoaded(){
  dosLoading.parentNode.removeChild(dosLoading);
}


//Run loading if files need to be loaded, else show desktop
if (needsLoading) {
  runTasks();
}else {
  fullyLoaded();
}
