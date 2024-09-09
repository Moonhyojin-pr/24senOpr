FlowRouter.route('/detail/:postId', {
    action: function() {
        BlazeLayout.render('layout', {main: 'detail'});
    }
});

Template.detail.helpers({
    post() {
        const postId = FlowRouter.getParam('postId');
        return Posts.findOne(postId);
    }
});

Template.detail.events({
    'click #remove': function() {
        //데이터베이스에서 현재 글을 삭제 한다.
        if (confirm('정말 삭제하시겠습니까?')) {
            //삭제 한다 선택.
            const postId = FlowRouter.getParam('postId');
            Posts.remove(postId);
        } else {
            //삭제 안한다 선택.
            return;
        }
        
        //이전 목록으로 돌아간다.
        FlowRouter.go('/');

    }
    
})
