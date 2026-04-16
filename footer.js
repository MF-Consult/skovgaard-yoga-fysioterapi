(function () {
  'use strict';

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function buildHoursHtml(hours) {
    return hours.map(function (row) {
      return escapeHtml(row.day) + ': ' + escapeHtml(row.time);
    }).join('<br>');
  }

  function buildFooterHtml(g) {
    var c = g.contact;
    var f = g.footer;
    var hoursHtml = buildHoursHtml(g.hours);
    var taglineHtml = escapeHtml(f.tagline).replace(/\n/g, '<br>');

    return '<footer style="background:#1a0f2e; font-family:\'Montserrat\',sans-serif;">'

      // CTA strip
      + '<div style="border-bottom:1px solid rgba(255,255,255,0.07); padding:2.5rem 0;">'
      + '<div style="max-width:1280px; margin:0 auto; padding:0 1.5rem; display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:1.5rem;">'
      + '<div>'
      + '<p data-content-key="global.footer.cta_heading" style="font-family:\'Playfair Display\',serif; font-style:italic; font-size:1.35rem; color:#fff; margin:0 0 .25rem;">' + escapeHtml(f.cta_heading) + '</p>'
      + '<p data-content-key="global.footer.cta_subtext" style="color:#c4b0df; font-size:0.95rem; margin:0;">' + escapeHtml(f.cta_subtext) + '</p>'
      + '</div>'
      + '<a href="kontakt.html" data-content-key="global.footer.cta_button" style="background:linear-gradient(135deg,#462b58,#aa81c5); color:#fff; padding:14px 36px; font-size:0.95rem; font-weight:700; text-transform:uppercase; letter-spacing:.18em; text-decoration:none; border-radius:2px; white-space:nowrap;" onmouseover="this.style.opacity=\'.85\'" onmouseout="this.style.opacity=\'1\'">' + escapeHtml(f.cta_button) + '</a>'
      + '</div>'
      + '</div>'

      // Main grid
      + '<div style="max-width:1280px; margin:0 auto; padding:4rem 1.5rem 3rem; display:grid; grid-template-columns:repeat(auto-fit, minmax(180px,1fr)); gap:3rem;">'

      // Brand column
      + '<div style="grid-column:span 1;">'
      + '<img src="Assets/aflangtlogo_web_final.png" alt="Skovgaard Logo" style="height:64px; filter:brightness(0) invert(1); margin-bottom:1.25rem;">'
      + '<p data-content-key="global.footer.tagline" style="color:#c4b0df; font-size:0.95rem; line-height:1.75; margin:0 0 1.5rem;">' + taglineHtml + '</p>'
      + '<div style="display:flex; gap:14px;">'
      + '<a href="https://www.facebook.com/pages/B%C3%B8rnenes-Fysioterapi/245320455624263" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style="display:flex; align-items:center; justify-content:center; width:36px; height:36px; border-radius:50%; border:1px solid rgba(255,255,255,0.12); color:#c4b0df; text-decoration:none;" onmouseover="this.style.background=\'rgba(255,255,255,0.08)\';this.style.color=\'#fff\'" onmouseout="this.style.background=\'transparent\';this.style.color=\'#c4b0df\'">'
      + '<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>'
      + '<a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style="display:flex; align-items:center; justify-content:center; width:36px; height:36px; border-radius:50%; border:1px solid rgba(255,255,255,0.12); color:#c4b0df; text-decoration:none;" onmouseover="this.style.background=\'rgba(255,255,255,0.08)\';this.style.color=\'#fff\'" onmouseout="this.style.background=\'transparent\';this.style.color=\'#c4b0df\'">'
      + '<svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>'
      + '</div>'
      + '</div>'

      // Ydelser column
      + '<div>'
      + '<h5 style="color:#fff; font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:.2em; margin:0 0 1.25rem;">Ydelser</h5>'
      + '<ul style="list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:.7rem;">'
      + '<li><a href="stress.html" style="color:#c4b0df; font-size:0.95rem; text-decoration:none;" onmouseover="this.style.color=\'#fff\'" onmouseout="this.style.color=\'#c4b0df\'">Stressforløb (Privat)</a></li>'
      + '<li><a href="stress-erhverv.html" style="color:#c4b0df; font-size:0.95rem; text-decoration:none;" onmouseover="this.style.color=\'#fff\'" onmouseout="this.style.color=\'#c4b0df\'">Stressforløb (Virksomhed)</a></li>'
      + '<li><a href="glad.html" style="color:#c4b0df; font-size:0.95rem; text-decoration:none;" onmouseover="this.style.color=\'#fff\'" onmouseout="this.style.color=\'#c4b0df\'">GLA:D\u00ae Træning</a></li>'
      + '<li><a href="gifted.html" style="color:#c4b0df; font-size:0.95rem; text-decoration:none;" onmouseover="this.style.color=\'#fff\'" onmouseout="this.style.color=\'#c4b0df\'">Høj Begavelse</a></li>'
      + '<li><a href="fysioterapi.html" style="color:#c4b0df; font-size:0.95rem; text-decoration:none;" onmouseover="this.style.color=\'#fff\'" onmouseout="this.style.color=\'#c4b0df\'">Fysioterapi</a></li>'
      + '<li><a href="yoga.html" style="color:#c4b0df; font-size:0.95rem; text-decoration:none;" onmouseover="this.style.color=\'#fff\'" onmouseout="this.style.color=\'#c4b0df\'">Yogaterapi</a></li>'
      + '<li><a href="boern.html" style="color:#c4b0df; font-size:0.95rem; text-decoration:none;" onmouseover="this.style.color=\'#fff\'" onmouseout="this.style.color=\'#c4b0df\'">Børnefysioterapi</a></li>'
      + '<li><a href="konsulent.html" style="color:#c4b0df; font-size:0.95rem; text-decoration:none;" onmouseover="this.style.color=\'#fff\'" onmouseout="this.style.color=\'#c4b0df\'">Ekstern konsulent</a></li>'
      + '</ul>'
      + '</div>'

      // Om klinikken column
      + '<div>'
      + '<h5 style="color:#fff; font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:.2em; margin:0 0 1.25rem;">Om klinikken</h5>'
      + '<ul style="list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:.7rem;">'
      + '<li><a href="om.html" style="color:#c4b0df; font-size:0.95rem; text-decoration:none;" onmouseover="this.style.color=\'#fff\'" onmouseout="this.style.color=\'#c4b0df\'">Om mig</a></li>'
      + '<li><a href="priser.html" style="color:#c4b0df; font-size:0.95rem; text-decoration:none;" onmouseover="this.style.color=\'#fff\'" onmouseout="this.style.color=\'#c4b0df\'">Priser</a></li>'
      + '<li><a href="https://www.skovgaardyogaogfysioterapi.dk/cohen/" style="color:#c4b0df; font-size:0.95rem; text-decoration:none;" onmouseover="this.style.color=\'#fff\'" onmouseout="this.style.color=\'#c4b0df\'">Stresstest</a></li>'
      + '<li><a href="kontakt.html" style="color:#c4b0df; font-size:0.95rem; text-decoration:none;" onmouseover="this.style.color=\'#fff\'" onmouseout="this.style.color=\'#c4b0df\'">Kontakt</a></li>'
      + '<li><a href="kontakt.html" style="color:#c4b0df; font-size:0.95rem; text-decoration:none;" onmouseover="this.style.color=\'#fff\'" onmouseout="this.style.color=\'#c4b0df\'">Book tid</a></li>'
      + '</ul>'
      + '</div>'

      // Find os column
      + '<div>'
      + '<h5 style="color:#fff; font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:.2em; margin:0 0 1.25rem;">Find os</h5>'
      + '<ul style="list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:.85rem;">'
      + '<li style="display:flex; gap:.75rem; align-items:flex-start;">'
      + '<svg style="width:14px; height:14px; color:#aa81c5; flex-shrink:0; margin-top:2px;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>'
      + '<span style="color:#c4b0df; font-size:0.95rem; line-height:1.65;"><span data-content-key="global.contact.address_line1">' + escapeHtml(c.address_line1) + '</span><br><span data-content-key="global.contact.address_line2">' + escapeHtml(c.address_line2) + '</span><br><span data-content-key="global.contact.parking" style="font-size:0.95rem; opacity:.6;">' + escapeHtml(c.parking) + '</span></span>'
      + '</li>'
      + '<li style="display:flex; gap:.75rem; align-items:center;">'
      + '<svg style="width:14px; height:14px; color:#aa81c5; flex-shrink:0;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>'
      + '<a data-content-key="global.contact.phone" href="tel:+45' + c.phone.replace(/\s/g, '') + '" style="color:#c4b0df; font-size:0.95rem; text-decoration:none;" onmouseover="this.style.color=\'#fff\'" onmouseout="this.style.color=\'#c4b0df\'">' + escapeHtml(c.phone) + '</a>'
      + '</li>'
      + '<li style="display:flex; gap:.75rem; align-items:center;">'
      + '<svg style="width:14px; height:14px; color:#aa81c5; flex-shrink:0;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'
      + '<a data-content-key="global.contact.email" href="mailto:' + escapeHtml(c.email) + '" style="color:#c4b0df; font-size:0.95rem; text-decoration:none;" onmouseover="this.style.color=\'#fff\'" onmouseout="this.style.color=\'#c4b0df\'">' + escapeHtml(c.email) + '</a>'
      + '</li>'
      + '<li style="display:flex; gap:.75rem; align-items:flex-start;">'
      + '<svg style="width:14px; height:14px; color:#aa81c5; flex-shrink:0; margin-top:2px;" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
      + '<span data-content-key="global.hours" style="color:#c4b0df; font-size:0.95rem; line-height:1.65;">' + hoursHtml + '</span>'
      + '</li>'
      + '</ul>'
      + '</div>'
      + '</div>'

      // Bottom bar
      + '<div style="border-top:1px solid rgba(255,255,255,0.07); padding:1.25rem 0;">'
      + '<div style="max-width:1280px; margin:0 auto; padding:0 1.5rem; display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:.75rem;">'
      + '<p data-content-key="global.footer.copyright" style="color:rgba(196,176,223,.45); font-size:0.75rem; text-transform:uppercase; letter-spacing:.15em; margin:0;">' + escapeHtml(f.copyright) + '</p>'
      + '<p data-content-key="global.footer.credit" style="color:rgba(196,176,223,.35); font-size:0.75rem; margin:0;">' + escapeHtml(f.credit) + '</p>'
      + '</div>'
      + '</div>'

      + '</footer>';
  }

  function renderFooter(g) {
    var target = document.getElementById('site-footer');
    if (!target) return;
    var wrapper = document.createElement('div');
    wrapper.innerHTML = buildFooterHtml(g);
    target.parentNode.replaceChild(wrapper.firstElementChild, target);
  }

  fetch('content/global.json')
    .then(function (r) { return r.json(); })
    .then(function (g) { renderFooter(g); })
    .catch(function () {
      // Fallback: render with hardcoded values if JSON fetch fails (e.g. file:// protocol)
      renderFooter({
        contact: {
          phone: '60 87 36 26',
          email: 'birgitte@skyf.dk',
          address_line1: 'Vordingborgvej 61C (i gården)',
          address_line2: '4700 Næstved',
          parking: 'Parkering på Norgesvej'
        },
        hours: [
          { day: 'Man\u2013Tir', time: '10\u201317' },
          { day: 'Ons', time: 'Lukket' },
          { day: 'Tor', time: '10\u201319' },
          { day: 'Fre', time: '10\u201315' },
          { day: 'L\u00f8r\u2013S\u00f8n', time: 'Lukket' }
        ],
        footer: {
          tagline: 'Fra hjerte til hjerte.\nHolistisk terapi og undervisning\ni N\u00e6stved.',
          cta_heading: 'Klar til at tage det f\u00f8rste skridt?',
          cta_subtext: 'Book en uforpligtende samtale \u2014 jeg svarer inden for 24 timer.',
          cta_button: 'Book tid nu',
          copyright: '\u00a9 2026 Skovgaard Yoga- & Fysioterapi \u00b7 CVR 26002680',
          credit: 'Designet og udviklet i Danmark'
        }
      });
    });
})();
