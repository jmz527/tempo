var ExampleApplication = React.createClass({
  render: function() {
    var now = new Date();
    var meridiem = (now.getHours() > 12)?"pm":"am";
    var hours = ((now.getHours() + 11) % 12 + 1);
    var time = hours+":"+now.getMinutes()+meridiem+" & "+now.getSeconds()+" seconds";

    var elapsed = Math.round(this.props.elapsed  / 100);
    var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
    var message = '. Tempo has been successfully running for ' + seconds + ' seconds.';

    return React.DOM.p(null, time, message);
  }
});

// Call React.createFactory instead of directly call ExampleApplication({...}) in React.render
var ExampleApplicationFactory = React.createFactory(ExampleApplication);

var start = new Date().getTime();

setInterval(function() {
  ReactDOM.render(
    ExampleApplicationFactory({elapsed: new Date().getTime() - start}),
    document.getElementById('container')
  );
}, 50);