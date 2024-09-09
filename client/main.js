
Posts = new Mongo.Collection('posts');

FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render('layout', {main: 'main'});
    }
})


// //글자 수 카운트
// document.addEventListener('DOMContentLoaded', function(){
//     const titlePost =document.getElementById('titlePost');
//     const titleCount =document.getElementById('titleCount');
//     const charCount =document.getElementById('charCount');

//     titlePost.addEventListener('input', function() {
//     const text = $('#titlePost').val();
//     titleCount.textContent = text;
//     charCount.textContent = `${text.length} 글자;`
//     });

// });



//0810추가(titlePost 입력, DB)
Template.main.events({
    'click #tilteSave': function(event) {
        // #save button 클릭 시 실행 됨.
        // 1. #titlePost input에서 제목을 가져옴
        const titlePost = $('#titlePost').val();       
        // 3. 가져온 데이터를 json으로 DB에 저장
        if (titlePost.length <= 0) {

            return alert('제목/내용을 입력 해 주세요.');

        }else{

            alert('저장됐습니다.');

            const json = {
                titlePost: titlePost,
                createdAt: new Date()           
            }
            Posts.insert(json);
            
        }
            //****실행안됨****
            // titlePost = ' ';
        
    }
})
  

Template.main.helpers({
    posts: function() {
        return Posts.find().fetch();
    }
});
