
Posts = new Mongo.Collection('posts');

FlowRouter.route('/contact', {
    action: function() {
        BlazeLayout.render('layout', {main: 'contact'});
    }
})


//0810추가(titlePost 입력, DB)
Template.contact.events({
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
            // titlePost = '';
        
    }
})
  

Template.contact.helpers({
    posts: function() {
        return Posts.find().fetch();
    }
});
