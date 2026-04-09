(function () {
  const html = `
<footer style="background:#1a0f2e; font-family:'Montserrat',sans-serif;">

  <!-- CTA strip -->
  <div style="border-bottom:1px solid rgba(255,255,255,0.07); padding:2.5rem 0;">
    <div style="max-width:1280px; margin:0 auto; padding:0 1.5rem; display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:1.5rem;">
      <div>
        <p style="font-family:'Playfair Display',serif; font-style:italic; font-size:1.35rem; color:#fff; margin:0 0 .25rem;">Klar til at tage det første skridt?</p>
        <p style="color:#c4b0df; font-size:0.8rem; margin:0;">Book en uforpligtende samtale — jeg svarer inden for 24 timer.</p>
      </div>
      <a href="kontakt.html" style="background:linear-gradient(135deg,#462b58,#aa81c5); color:#fff; padding:14px 36px; font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:.18em; text-decoration:none; border-radius:2px; white-space:nowrap; transition:opacity .2s;" onmouseover="this.style.opacity='.85'" onmouseout="this.style.opacity='1'">Book tid nu</a>
    </div>
  </div>

  <!-- Main grid -->
  <div style="max-width:1280px; margin:0 auto; padding:4rem 1.5rem 3rem; display:grid; grid-template-columns:repeat(auto-fit, minmax(180px,1fr)); gap:3rem;">

    <!-- Brand -->
    <div style="grid-column:span 1;">
      <img src="Assets/aflangtlogo_web_final.png" alt="Skovgaard Logo" style="height:44px; filter:brightness(0) invert(1); margin-bottom:1.25rem;">
      <p style="color:#c4b0df; font-size:0.8rem; line-height:1.75; margin:0 0 1.5rem;">Fra hjerte til hjerte.<br>Holistisk terapi og undervisning<br>i Næstved.</p>
      <div style="display:flex; gap:14px;">
        <a href="https://www.facebook.com/pages/B%C3%B8rnenes-Fysioterapi/245320455624263" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style="display:flex; align-items:center; justify-content:center; width:36px; height:36px; border-radius:50%; border:1px solid rgba(255,255,255,0.12); color:#c4b0df; text-decoration:none; transition:background .2s, color .2s;" onmouseover="this.style.background='rgba(255,255,255,0.08)';this.style.color='#fff'" onmouseout="this.style.background='transparent';this.style.color='#c4b0df'">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style="display:flex; align-items:center; justify-content:center; width:36px; height:36px; border-radius:50%; border:1px solid rgba(255,255,255,0.12); color:#c4b0df; text-decoration:none; transition:background .2s, color .2s;" onmouseover="this.style.background='rgba(255,255,255,0.08)';this.style.color='#fff'" onmouseout="this.style.background='transparent';this.style.color='#c4b0df'">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
      </div>
    </div>

    <!-- Ydelser -->
    <div>
      <h5 style="color:#fff; font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:.2em; margin:0 0 1.25rem;">Ydelser</h5>
      <ul style="list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:.7rem;">
        <li><a href="stress.html" style="color:#c4b0df; font-size:.82rem; text-decoration:none; transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#c4b0df'">Stressforløb (Privat)</a></li>
        <li><a href="stress-erhverv.html" style="color:#c4b0df; font-size:.82rem; text-decoration:none; transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#c4b0df'">Stressforløb (Virksomhed)</a></li>
        <li><a href="glad.html" style="color:#c4b0df; font-size:.82rem; text-decoration:none; transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#c4b0df'">GLA:D® Træning</a></li>
        <li><a href="gifted.html" style="color:#c4b0df; font-size:.82rem; text-decoration:none; transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#c4b0df'">Høj Begavelse</a></li>
        <li><a href="fysioterapi.html" style="color:#c4b0df; font-size:.82rem; text-decoration:none; transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#c4b0df'">Fysioterapi</a></li>
        <li><a href="yoga.html" style="color:#c4b0df; font-size:.82rem; text-decoration:none; transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#c4b0df'">Yogaterapi</a></li>
        <li><a href="boern.html" style="color:#c4b0df; font-size:.82rem; text-decoration:none; transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#c4b0df'">Børnefysioterapi</a></li>
        <li><a href="konsulent.html" style="color:#c4b0df; font-size:.82rem; text-decoration:none; transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#c4b0df'">Ekstern konsulent</a></li>
      </ul>
    </div>

    <!-- Om klinikken -->
    <div>
      <h5 style="color:#fff; font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:.2em; margin:0 0 1.25rem;">Om klinikken</h5>
      <ul style="list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:.7rem;">
        <li><a href="om.html" style="color:#c4b0df; font-size:.82rem; text-decoration:none; transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#c4b0df'">Om mig</a></li>
        <li><a href="priser.html" style="color:#c4b0df; font-size:.82rem; text-decoration:none; transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#c4b0df'">Priser</a></li>
        <li><a href="https://www.skovgaardyogaogfysioterapi.dk/cohen/" style="color:#c4b0df; font-size:.82rem; text-decoration:none; transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#c4b0df'">Stresstest</a></li>
        <li><a href="kontakt.html" style="color:#c4b0df; font-size:.82rem; text-decoration:none; transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#c4b0df'">Kontakt</a></li>
        <li><a href="kontakt.html" style="color:#c4b0df; font-size:.82rem; text-decoration:none; transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#c4b0df'">Book tid</a></li>
      </ul>
    </div>

    <!-- Find os -->
    <div>
      <h5 style="color:#fff; font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:.2em; margin:0 0 1.25rem;">Find os</h5>
      <ul style="list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:.85rem;">
        <li style="display:flex; gap:.75rem; align-items:flex-start;">
          <svg style="width:14px; height:14px; color:#aa81c5; flex-shrink:0; margin-top:2px;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          <span style="color:#c4b0df; font-size:.82rem; line-height:1.65;">Vordingborgvej 61C (i gården)<br>4700 Næstved<br><span style="font-size:.75rem; opacity:.6;">Parkering på Norgesvej</span></span>
        </li>
        <li style="display:flex; gap:.75rem; align-items:center;">
          <svg style="width:14px; height:14px; color:#aa81c5; flex-shrink:0;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          <a href="tel:+4560873626" style="color:#c4b0df; font-size:.82rem; text-decoration:none; transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#c4b0df'">60 87 36 26</a>
        </li>
        <li style="display:flex; gap:.75rem; align-items:center;">
          <svg style="width:14px; height:14px; color:#aa81c5; flex-shrink:0;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          <a href="mailto:birgitte@skyf.dk" style="color:#c4b0df; font-size:.82rem; text-decoration:none; transition:color .2s;" onmouseover="this.style.color='#fff'" onmouseout="this.style.color='#c4b0df'">birgitte@skyf.dk</a>
        </li>
        <li style="display:flex; gap:.75rem; align-items:flex-start;">
          <svg style="width:14px; height:14px; color:#aa81c5; flex-shrink:0; margin-top:2px;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span style="color:#c4b0df; font-size:.82rem; line-height:1.65;">Man–Tir: 10–17<br>Ons: Lukket<br>Tor: 10–19<br>Fre: 10–15<br>Lør–Søn: Lukket</span>
        </li>
      </ul>
    </div>
  </div>

  <!-- Bottom bar -->
  <div style="border-top:1px solid rgba(255,255,255,0.07); padding:1.25rem 0;">
    <div style="max-width:1280px; margin:0 auto; padding:0 1.5rem; display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:.75rem;">
      <p style="color:rgba(196,176,223,.45); font-size:.7rem; text-transform:uppercase; letter-spacing:.15em; margin:0;">© 2026 Skovgaard Yoga- &amp; Fysioterapi &nbsp;·&nbsp; CVR 26002680</p>
      <p style="color:rgba(196,176,223,.35); font-size:.7rem; margin:0;">Designet og udviklet i Danmark</p>
    </div>
  </div>

</footer>`;

  const target = document.getElementById('site-footer');
  if (target) target.outerHTML = html;
})();
