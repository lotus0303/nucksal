$(function(){
    //함수를 실행한다.
    start();
    //0,1,2까지의 총3장의 이미지를 변수에 저장한다.
    var imgs=3;
    //0번째부터 시작한다.
    var now=0;

    //시작부분 함수 만들기
    function start(){
      //이미지의 첫번째 요소와 형제들에게 이미지를 좌우로 이동하게 하는 구문
      $("#slide img").eq(0).siblings().css({"margin-left":"-538px"});
      //3초마다 슬라이드 된다.
      setInterval(function(){slide();},3000);
    };

    //슬라이드 함수 만들기
    function slide(){
      //변수 now와 변수 img의 값이 같다면 now의 값에 1을 더한 값을 대입한다.(같다면 now의 값에0을 대입하고, 같지않다면 now에 1을 더해서 now에 대입한다)
      now=now==imgs?0:now+=1;
      //이전이미지는 옆으로 나간다.
      $("#slide img").eq(now-1).css({"margin-left":"-538px"});
      //현재 이미지를 보이게 한다.
      $("#slide img").eq(now).css({"margin-left":"0px"});
    };
});