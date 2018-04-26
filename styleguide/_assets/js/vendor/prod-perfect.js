!function(name,path,ctx){
  var latest,prev=name!=='Keen'&&window.Keen?window.Keen:false;ctx[name]=ctx[name]||{ready:function(fn){var h=document.getElementsByTagName('head')[0],s=document.createElement('script'),w=window,loaded;s.onload=s.onreadystatechange=function(){if((s.readyState&&!(/^c|loade/.test(s.readyState)))||loaded){return}s.onload=s.onreadystatechange=null;loaded=1;latest=w.Keen;if(prev){w.Keen=prev}else{try{delete w.Keen}catch(e){w.Keen=void 0}}ctx[name]=latest;ctx[name].ready(fn)};s.async=1;s.src=path;h.parentNode.insertBefore(s,h)}}
}('ProdPerfectKeen','https://d1vnucvopbiinv.cloudfront.net/keen-tracking.min.js',this);
ProdPerfectKeen.ready(function(){
  var client = new ProdPerfectKeen({
    projectId: '5adce3eac9e77c0001b895bd',
    writeKey: '0AD5C295946F8E8FE30167600BABBF7109AD0EEE4DAA1970771BA8FC73637C9758B7F4ED5E1AA64034C5B3B7E0C3FE7B9A273A455C11C203CC419238512402821EFB41FA87190840A3D68F271C282C5D50D4808BC0E68BC3252B2ADAF433285D',
    requestType: 'beacon',
    host: 'ti6jgi88s4.execute-api.us-west-2.amazonaws.com/Production'
  });
  client.extendEvents({
    visitor: {
      user_id: null
    }
  });
  var options = {
    ignoreDisabledFormFields: false,
    ignoreFormFieldTypes: ['password', 'email'],
    recordClicks: true,
    recordFormSubmits: false,
    recordInputChanges: true,
    recordPageViews: true,
    recordPageUnloads: true,
    recordScrollState: true
  };
  client.initAutoTracking(options);
  ProdPerfectKeen.utils.listener('*').on('keydown', function (e) {
    var key_type = e.key, acceptable_keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'End', 'Home', 'PageUp',
      'PageDown', ' ', 'Escape', 'Enter'];
    if (acceptable_keys.indexOf(key_type) === -1){
      return;
    }
    var props = {
      key_type: key_type
    };
    client.recordEvent('keyboard_shortcuts', props);
  });
  ProdPerfectKeen.utils.listener('form').on('submit', function (e) {
    var el = e.target;
    var serializerOptions = {
      disabled: options.ignoreDisabledFormFields,
      ignoreTypes: options.ignoreFormFieldTypes
    };
    var fields = ProdPerfectKeen.utils.serializeForm(el, serializerOptions);
    var keys = Object.keys(fields);
    for (var x = 0; x < keys.length; x++) {
      fields[keys[x]] = '---REDACTED---';
    }
    var props = {
      form: {
        action: el.action,
        fields: fields,
        method: el.method
      },
      element: ProdPerfectKeen.helpers.getDomNodeProfile(el),
      local_time_full: new Date(),
      page: {
        scroll_state: ProdPerfectKeen.helpers.getScrollState
      }
    };
    client.recordEvent('form_submissions', props);
  });
});
