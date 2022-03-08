async function QuickEasySMS() {
    event.preventDefault();
    const form = event.target;
    const to = form.querySelector('[name=to]').value;
    const msg = form.querySelector('[name=msg]').value;
    const result = await fetch("https://sms77io.p.rapidapi.com/analytics?p=c61842b6e0msh39b14db5281e5b6p1b2646jsn0253812fd23&label=all&subaccounts=only_main", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "sms77io.p.rapidapi.com",
            "x-rapidapi-key": "c61842b6e0msh39b14db5281e5b6p1b2646jsn0253812fd238"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
    const body = await result.json();
    console.log(body);
    alert(body.StatusCode === 0
      ? 'Code sent!'
      : 'Something went wrong. Check dev console.');
  }