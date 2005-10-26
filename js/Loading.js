/**
 * Default loading implementation
 *
 * @category   HTML
 * @package    Ajax
 * @author     Joshua Eichorn <josh@bluga.net>
 * @copyright  2005 Joshua Eichorn
 * @license    http://www.opensource.org/licenses/lgpl-license.php  LGPL
 */

HTML_AJAX.onOpen = function(request) {
    var loading = document.getElementById('HTML_AJAX_LOADING');
    if (!loading) {
        loading = document.createElement('div');
        loading.id = 'HTML_AJAX_LOADING';
        loading.innerHTML = 'Loading...';
        loading.style.position = 'absolute';
        loading.style.top = 0;
        loading.style.right = 0;
        loading.style.backgroundColor = 'red';
        loading.style.width = '80px';
        loading.style.padding = '4px';
    
        document.body.insertBefore(loading,document.body.firstChild);
    }
    HTML_AJAX.onOpen_Timeout = window.setTimeout(function() { loading.style.display = 'block'; },500);
}
HTML_AJAX.onLoad = function(request) {
    if (HTML_AJAX.onOpen_Timeout) {
        window.clearTimeout(HTML_AJAX.onOpen_Timeout);
        HTML_AJAX.onOpen_Timeout = false;
    }
    var loading = document.getElementById('HTML_AJAX_LOADING');
    if (loading) {
        loading.style.display = 'none';
    }
}
/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */