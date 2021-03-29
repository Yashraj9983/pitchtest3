let pitch;
let audioContext;
let mic;
let freq=0;
let audstat=0;

//const button=  document.getElementById('button');

function setup() {
 // createCanvas(400, 400);
/* crepe = (function() {

  audioContext=new AudioC:\Users\yashr\Desktop\learn2\pitchtest2\static\crepe
  if (audioContext.state === 'running') {
          status('Running ...');
        } else {
          // user gesture (like click) is required to start AudioContext, in some browser versions
          status('<a href="javascript:crepe.resume();" style="color:red;">* Click here to start the demo *</a>')
        }
   return {
    'audioContext': audioContext,
    'resume': function() {
      audioContext.resume();
      if (audioContext.state === 'running') {
      status('Running ...');}
    }
  }
})();
*/
}
 // function status(message) {
   // document.getElementById('status').innerHTML = message;
  //}
function audint(){
  document.getElementById('modelstatus').innerHTML = "Loading...";
    audioContext=getAudioContext();
  mic= new p5.AudioIn();
  mic.start(listening);
  
}
function audstop(){
 
  //audioContext.suspend();
  audstat=0;
  audioContext.suspend();
}
function audstart(){
  audioContext.resume();
  audstat=1;

}
function listening(){
  console.log('listening');
  audioContext.resume();

  pitch=ml5.pitchDetection(
  './model/',
  audioContext,
  mic.stream,
  modelLoaded);
 
  
}


/*function touchStarted(){
  const button=  document.getElementById('click');
  audioContext=getAudioContext();
  mic= new p5.AudioIn();
  mic.start(listening);
}

const startButton=document.createElement("button");
startButton.innerText="play";
startButton.addEventListener("click",()=>{
});*/
//function touchStarted(){    getAudioContext().resume()}

function gotPitch(error,frequency){
  if(error){
    console.log(error);
  }
  else{
    if(frequency){
      freq=frequency;
      document.getElementById('curfreq').innerHTML = freq;
      if(freq>16&&freq<16.60)
          document.getElementById('note').innerHTML = `C<sup></sup><sub>0</sub>`;
      else if(freq>17&&freq<17.60)
          document.getElementById('note').innerHTML = `C<sup>#</sup><sub>0</sub> / D<sup>b</sup><sub>0</sub>`;
      else if(freq>18&&freq<18.60)
          document.getElementById('note').innerHTML = `D<sup></sup><sub>0</sub>`;    
      else if(freq>19&&freq<19.80)
          document.getElementById('note').innerHTML = `D<sup>#</sup><sub>0</sub> / E<sup>b</sup><sub>0</sub>`;
      else if(freq>20.2&&freq<21)
          document.getElementById('note').innerHTML = `E<sup></sup><sub>0</sub>`;
      else if(freq>21.5&&freq<22)
          document.getElementById('note').innerHTML = `F<sup></sup><sub>0</sub>`;
      else if(freq>22.9&&freq<23.5)
          document.getElementById('note').innerHTML = `F<sup>#</sup><sub>0</sub> / G<sup>b</sup><sub>0</sub>`;    
      else if(freq>24&&freq<25)
          document.getElementById('note').innerHTML = `G<sup></sup><sub>0</sub>`;
      else if(freq>25.6&&freq<26.4)
          document.getElementById('note').innerHTML = `G<sup>#</sup><sub>0</sub> / A<sup>b</sup><sub>0</sub>`;
      else if(freq>27.1&&freq<27.8)
          document.getElementById('note').innerHTML = `A<sup></sup><sub>0</sub>`;
      else if(freq>28.9&&freq<29.4)
          document.getElementById('note').innerHTML = `A<sup>#</sup><sub>0</sub> / B<sup>b</sup><sub>0</sub>`;
      else if(freq>30.5&&freq<31)
          document.getElementById('note').innerHTML = `B<sup></sup><sub>0</sub>`;
      else if(freq>32.4&&freq<32.9)
          document.getElementById('note').innerHTML = `C<sup></sup><sub>1</sub>`;
      else if(freq>34.4&&freq<34.8)
          document.getElementById('note').innerHTML = `C<sup>#</sup><sub>1</sub> / D<sup>b</sup><sub>1</sub>`;
      else if(freq>36.5&&freq<36.9)
          document.getElementById('note').innerHTML = `D<sup></sup><sub>1</sub>`;    
      else if(freq>38.6&&freq<39)
          document.getElementById('note').innerHTML = `D<sup>#</sup><sub>1</sub> / E<sup>b</sup><sub>1</sub>`;
      else if(freq>41&&freq<41.5)
          document.getElementById('note').innerHTML = `E<sup></sup><sub>1</sub>`;
      else if(freq>43.4&&freq<43.9)
          document.getElementById('note').innerHTML = `F<sup></sup><sub>1</sub>`;
      else if(freq>46&&freq<46.5)
          document.getElementById('note').innerHTML = `F<sup>#</sup><sub>1</sub> / G<sup>b</sup><sub>1</sub>`;    
      else if(freq>48.8&&freq<49.3)
          document.getElementById('note').innerHTML = `G<sup></sup><sub>1</sub>`;
      else if(freq>51.6&&freq<52.1)
          document.getElementById('note').innerHTML = `G<sup>#</sup><sub>1</sub> / A<sup>b</sup><sub>1</sub>`;
      else if(freq>54.6&&freq<55.4)
          document.getElementById('note').innerHTML = `A<sup></sup><sub>1</sub>`;
      else if(freq>58&&freq<58.4)
          document.getElementById('note').innerHTML = `A<sup>#</sup><sub>1</sub> / B<sup>b</sup><sub>1</sub>`;
      else if(freq>61.4&&freq<62)
          document.getElementById('note').innerHTML = `B<sup></sup><sub>1</sub>`;
      else if(freq>65.1&&freq<65.8)
          document.getElementById('note').innerHTML = `C<sup></sup><sub>2</sub>`;
      else if(freq>69&&freq<69.6)
          document.getElementById('note').innerHTML = `C<sup>#</sup><sub>2</sub> / D<sup>b</sup><sub>2</sub>`;
      else if(freq>73.1&&freq<73.9)
          document.getElementById('note').innerHTML = `D<sup></sup><sub>2</sub>`;    
      else if(freq>77.6&&freq<78)
          document.getElementById('note').innerHTML = `D<sup>#</sup><sub>2</sub> / E<sup>b</sup><sub>2</sub>`;
      else if(freq>82.1&&freq<82.7)
          document.getElementById('note').innerHTML = `E<sup></sup><sub>2</sub>`;
      else if(freq>87&&freq<88)
          document.getElementById('note').innerHTML = `F<sup></sup><sub>2</sub>`;
      else if(freq>91&&freq<93)
          document.getElementById('note').innerHTML = `F<sup>#</sup><sub>2</sub> / G<sup>b</sup><sub>2</sub>`;    
      else if(freq>97&&freq<99)
          document.getElementById('note').innerHTML = `G<sup></sup><sub>2</sub>`;
      else if(freq>103&&freq<104.5)
          document.getElementById('note').innerHTML = `G<sup>#</sup><sub>2</sub> / A<sup>b</sup><sub>2</sub>`;
      else if(freq>109&&freq<111)
          document.getElementById('note').innerHTML = `A<sup></sup><sub>2</sub>`;
      else if(freq>116&&freq<117.4)
          document.getElementById('note').innerHTML = `A<sup>#</sup><sub>2</sub> / B<sup>b</sup><sub>2</sub>`;
      else if(freq>122.5&&freq<124.5)
          document.getElementById('note').innerHTML = `B<sup></sup><sub>2</sub>`;
      else if(freq>129&&freq<132)
          document.getElementById('note').innerHTML = `C<sup></sup><sub>3</sub>`;
      else if(freq>137&&freq<140)
          document.getElementById('note').innerHTML = `C<sup>#</sup><sub>3</sub> / D<sup>b</sup><sub>3</sub>`;
      else if(freq>145&&freq<148)
          document.getElementById('note').innerHTML = `D<sup></sup><sub>3</sub>`;    
      else if(freq>154&&freq<157)
          document.getElementById('note').innerHTML = `D<sup>#</sup><sub>3</sub> / E<sup>b</sup><sub>3</sub>`;
      else if(freq>163&&freq<166)
          document.getElementById('note').innerHTML = `E<sup></sup><sub>3</sub>`;
      else if(freq>172&&freq<176)
          document.getElementById('note').innerHTML = `F<sup></sup><sub>3</sub>`;
      else if(freq>182&&freq<187)
          document.getElementById('note').innerHTML = `F<sup>#</sup><sub>3</sub> / G<sup>b</sup><sub>3</sub>`;    
      else if(freq>193&&freq<199)
          document.getElementById('note').innerHTML = `G<sup></sup><sub>3</sub>`;
      else if(freq>204&&freq<210)
          document.getElementById('note').innerHTML = `G<sup>#</sup><sub>3</sub> / A<sup>b</sup><sub>3</sub>`;
      else if(freq>215&&freq<225)
          document.getElementById('note').innerHTML = `A<sup></sup><sub>3</sub>`;
      else if(freq>230&&freq<237)
          document.getElementById('note').innerHTML = `A<sup>#</sup><sub>3</sub> / B<sup>b</sup><sub>3</sub>`;
      else if(freq>243&&freq<250)
          document.getElementById('note').innerHTML = `B<sup></sup><sub>3</sub>`;
      else if(freq>258&&freq<264)
          document.getElementById('note').innerHTML = `C<sup></sup><sub>4</sub>`;
      else if(freq>274&&freq<280)
          document.getElementById('note').innerHTML = `C<sup>#</sup><sub>4</sub> / D<sup>b</sup><sub>4</sub>`;
      else if(freq>290&&freq<296)
          document.getElementById('note').innerHTML = `D<sup></sup><sub>4</sub>`;    
      else if(freq>309&&freq<315)
          document.getElementById('note').innerHTML = `D<sup>#</sup><sub>4</sub> / E<sup>b</sup><sub>4</sub>`;
      else if(freq>326&&freq<332)
          document.getElementById('note').innerHTML = `E<sup></sup><sub>4</sub>`;
      else if(freq>346&&freq<253)
          document.getElementById('note').innerHTML = `F<sup></sup><sub>4</sub>`;
      else if(freq>366&&freq<373)
          document.getElementById('note').innerHTML = `F<sup>#</sup><sub>4</sub> / G<sup>b</sup><sub>4</sub>`;    
      else if(freq>288&&freq<396)
          document.getElementById('note').innerHTML = `G<sup></sup><sub>4</sub>`;
      else if(freq>410&&freq<420)
          document.getElementById('note').innerHTML = `G<sup>#</sup><sub>4</sub> / A<sup>b</sup><sub>4</sub>`;
      else if(freq>430&&freq<450)
          document.getElementById('note').innerHTML = `A<sup></sup><sub>4</sub>`;
      else if(freq>460&&freq<472)
          document.getElementById('note').innerHTML = `A<sup>#</sup><sub>4</sub> / B<sup>b</sup><sub>4</sub>`;
      else if(freq>488&&freq<499)
          document.getElementById('note').innerHTML = `B<sup></sup><sub>4</sub>`;
      else if(freq>518&&freq<529)
          document.getElementById('note').innerHTML = `C<sup></sup><sub>5</sub>`;
      else if(freq>550&&freq<560)
          document.getElementById('note').innerHTML = `C<sup>#</sup><sub>5</sub> / D<sup>b</sup><sub>5</sub>`;
      else if(freq>584&&freq<592)
          document.getElementById('note').innerHTML = `D<sup></sup><sub>5</sub>`;    
      else if(freq>617&&freq<628)
          document.getElementById('note').innerHTML = `D<sup>#</sup><sub>5</sub> / E<sup>b</sup><sub>5</sub>`;
      else if(freq>653&&freq<663)
          document.getElementById('note').innerHTML = `E<sup></sup><sub>5</sub>`;
      else if(freq>693&&freq<704)
          document.getElementById('note').innerHTML = `F<sup></sup><sub>5</sub>`;
      else if(freq>734&&freq<745)
          document.getElementById('note').innerHTML = `F<sup>#</sup><sub>5</sub> / G<sup>b</sup><sub>5</sub>`;    
      else if(freq>778&&freq<789)
          document.getElementById('note').innerHTML = `G<sup></sup><sub>5</sub>`;
      else if(freq>824&&freq<836)
          document.getElementById('note').innerHTML = `G<sup>#</sup><sub>5</sub> / A<sup>b</sup><sub>5</sub>`;
      else if(freq>874&&freq<888)
          document.getElementById('note').innerHTML = `A<sup></sup><sub>5</sub>`;
      else if(freq>924&&freq<940)
          document.getElementById('note').innerHTML = `A<sup>#</sup><sub>5</sub> / B<sup>b</sup><sub>5</sub>`;
      else if(freq>980&&freq<994)
          document.getElementById('note').innerHTML = `B<sup></sup><sub>5</sub>`;
      else if(freq>1040&&freq<1052)
          document.getElementById('note').innerHTML = `C<sup></sup><sub>6</sub>`;
      else if(freq>1100&&freq<1115)
          document.getElementById('note').innerHTML = `C<sup>#</sup><sub>6</sub> / D<sup>b</sup><sub>6</sub>`;
      else if(freq>1168&&freq<1180)
          document.getElementById('note').innerHTML = `D<sup></sup><sub>6</sub>`;    
      else if(freq>1238&&freq<1250)
          document.getElementById('note').innerHTML = `D<sup>#</sup><sub>6</sub> / E<sup>b</sup><sub>6</sub>`;
      else if(freq>1310&&freq<1330)
          document.getElementById('note').innerHTML = `E<sup></sup><sub>6</sub>`;
      else if(freq>1389&&freq<1407)
          document.getElementById('note').innerHTML = `F<sup></sup><sub>6</sub>`;
      else if(freq>1470&&freq<1490)
          document.getElementById('note').innerHTML = `F<sup>#</sup><sub>6</sub> / G<sup>b</sup><sub>6</sub>`;    
      else if(freq>1560&&freq<1577)
          document.getElementById('note').innerHTML = `G<sup></sup><sub>6</sub>`;
      else if(freq>1651&&freq<1671)
          document.getElementById('note').innerHTML = `G<sup>#</sup><sub>6</sub> / A<sup>b</sup><sub>6</sub>`;
      else if(freq>1750&&freq<1770)
          document.getElementById('note').innerHTML = `A<sup></sup><sub>6</sub>`;
      else if(freq>1854&&freq<1874)
          document.getElementById('note').innerHTML = `A<sup>#</sup><sub>6</sub> / B<sup>b</sup><sub>6</sub>`;
      else if(freq>1965&&freq<1985)
          document.getElementById('note').innerHTML = `B<sup></sup><sub>6</sub>`;
      else if(freq>2083&&freq<2103)
          document.getElementById('note').innerHTML = `C<sup></sup><sub>7</sub>`;
      else if(freq>2207&&freq<2227)
          document.getElementById('note').innerHTML = `C<sup>#</sup><sub>7</sub> / D<sup>b</sup><sub>7</sub>`;
      else if(freq>2339&&freq<2359)
          document.getElementById('note').innerHTML = `D<sup></sup><sub>7</sub>`;    
      else if(freq>2479&&freq<2499)
          document.getElementById('note').innerHTML = `D<sup>#</sup><sub>7</sub> / E<sup>b</sup><sub>7</sub>`;
      else if(freq>2627&&freq<2647)
          document.getElementById('note').innerHTML = `E<sup></sup><sub>7</sub>`;
      else if(freq>2783&&freq<2803)
          document.getElementById('note').innerHTML = `F<sup></sup><sub>7</sub>`;
      else if(freq>2949&&freq<2969)
          document.getElementById('note').innerHTML = `F<sup>#</sup><sub>7</sub> / G<sup>b</sup><sub>7</sub>`;    
      else if(freq>3125&&freq<3145)
          document.getElementById('note').innerHTML = `G<sup></sup><sub>7</sub>`;
      else if(freq>3312&&freq<3332)
          document.getElementById('note').innerHTML = `G<sup>#</sup><sub>7</sub> / A<sup>b</sup><sub>7</sub>`;
      else if(freq>3510&&freq<3530)
          document.getElementById('note').innerHTML = `A<sup></sup><sub>7</sub>`;
      else if(freq>3719&&freq<3739)
          document.getElementById('note').innerHTML = `A<sup>#</sup><sub>7</sub> / B<sup>b</sup><sub>7</sub>`;
      else if(freq>3941&&freq<3961)
          document.getElementById('note').innerHTML = `B<sup></sup><sub>7</sub>`;
      else if(freq>4176&&freq<4196)
          document.getElementById('note').innerHTML = `C<sup></sup><sub>8</sub>`;
      else if(freq>4424&&freq<4444)
          document.getElementById('note').innerHTML = `C<sup>#</sup><sub>8</sub> / D<sup>b</sup><sub>8</sub>`;
      else if(freq>4688&&freq<4708)
          document.getElementById('note').innerHTML = `D<sup></sup><sub>8</sub>`;    
      else if(freq>4968&&freq<4988)
          document.getElementById('note').innerHTML = `D<sup>#</sup><sub>8</sub> / E<sup>b</sup><sub>8</sub>`;
      else if(freq>4988)
          document.getElementById('note').innerHTML = `TOO HIGH`;
      else 
          document.getElementById('note').innerHTML = `--`;    
      
          }
  }
  pitch.getPitch(gotPitch);
}

function modelLoaded() {
  console.log('Model Loaded!');
  pitch.getPitch(gotPitch);
  audstat=1;
  document.getElementById('modelstatus').innerHTML = "ModelLoaded";

}

function getData(){
  return freq;
}

 Plotly.plot(document.querySelector(".wrapper"),[{
  y:[getData()],
  type:'line'
}]);

var cnt=0;

setInterval(function(){
  if(audstat==1){
  Plotly.extendTraces(document.querySelector(".wrapper"),{y:[[getData()]]},[0]);
  cnt++;
  {
    Plotly.relayout(document.querySelector(".wrapper"),{
      xaxis:{
        range:[cnt-30,cnt+30]
      }
    });
  }
}},250);

/*function draw() {
  background(0);
  textAlign(CENTER,CENTER);
  fill(255);
  textSize(64);
  text(freq.toFixed(2),width/2,height/2);
}*/
