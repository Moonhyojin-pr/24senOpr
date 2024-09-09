FlowRouter.route('/post', {
    action: function() {
        BlazeLayout.render('layout', {main: 'post'});
    }
})

Template.post.events({
    'click #save': function(event) {
        // #save button 클릭 시 실행 됨.
        // 1. #title인 input에서 제목을 가져옴
        const title = $('#title').val();
        // 2. #content인 textarea에서 컨텐츠 가져옴
        const content = $('#content').val();
        // 3. 가져온 데이터를 json으로 DB에 저장
        if (title.length <= 0 || content.length <= 0) {
            return alert('제목/내용을 입력 해 주세요.');
        }
                
        const json = {
            title: title,
            content: content,
            createdAt: new Date()
        }
        Posts.insert(json);
        // 4. 다시 목록화면(home)으로 돌아감
        FlowRouter.go('/');



        
    }
})
