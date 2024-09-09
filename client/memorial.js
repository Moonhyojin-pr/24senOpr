FlowRouter.route('/memorial', {
    action: function() {
        BlazeLayout.render('layout', {main: 'memorial'});
    }
})
