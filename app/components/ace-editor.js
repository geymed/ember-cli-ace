import Ember from 'ember';

export default Ember.Component.extend({
	classNames : ['emebr-ace-editor'],
		initAceEditor : function () {
			debugger;
			var $aceEl = this.$('.ember-ace-editor-wrapper');
			//require(['ace'], this.onAceReady.bind(this));
			this.onAceReady(window.	ace);

		}.on('didInsertElement'),
		aceEditorId: function(){
			return this.get('elementId') + '_aceEditor';
		}.property('elementId'),
		ace: null,
		aceEditor: null,
		readonly:false,
		onAceReady: function(ace){
			this.set('ace', ace);
			Ember.run.next(function(){
				var	editor = ace.edit(this.get('aceEditorId'));
	       		//editor.setTheme("ace/theme/dawn");
	       		//editor.getSession().setMode("ace/mode/javascript");
	       		editor.getSession().setUseWrapMode(true);
	       		editor.setShowPrintMargin(false);
	       		this.set('aceEditor', editor);
	       		this.bindAceEvents();
	       		editor.setValue(this.get('value'));
	       		var ro = this.get('readonly');	
	       		editor.setReadOnly(ro);
	       		editor.setHighlightActiveLine(!ro);
	       		if (ro) {
	       			editor.clearSelection();
	       		}

			}.bind(this))
		},
		value: null,
		bindAceEvents: function(){
			var aceEditor = this.get('aceEditor');
			aceEditor.on('change', function(){
				this.set('value', aceEditor.getValue())
			}.bind(this));
		}
		
});
