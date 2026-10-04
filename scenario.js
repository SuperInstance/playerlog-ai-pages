window.SCENARIO = {
  prompt: 'Name the call on the table…',
  decision: 'Should we rush B site?',
  factors: [
    { label: 'Enemy economy', weight: 0.85, score: 0.6,  note: 'They\u2019re broke. One hero rifle, rest pistols.' },
    { label: 'Our utility',   weight: 0.80, score: 0.5,  note: 'Two smokes, molly, flashes. Stacked.' },
    { label: 'Lurker info',   weight: 0.70, score: -0.6, note: 'No idea where their last two are. None.' },
    { label: 'Time on clock', weight: 0.75, score: 0.4,  note: '55 seconds. Enough for the plant.' },
    { label: 'Morale',        weight: 0.55, score: 0.7,  note: 'Three straight rounds. They\u2019re feeling it.' }
  ],
  seedLog: [
    { kind: 'note', text: 'Match point. The call is on the table: rush B, or play default?' }
  ]
};

window.SKIN_CONFIG = {
  domain: 'playerlog.ai',
  tagline: 'Every game, explained.',
  forSaleUrl: '#',
  scenario: window.SCENARIO,
  renderExtra: function (root, api) {
    var matches = [
      { m: 'Mirage',  r: '16–13', call: 'Slow A default', decided: 'Lurker info', v: 'GO' },
      { m: 'Inferno', r: '11–16', call: 'Forced B hit',  decided: 'Enemy economy', v: 'NO-GO' },
      { m: 'Nuke',    r: '16–9',  call: 'Rushed ramp',    decided: 'Our utility', v: 'GO' },
      { m: 'Dust2',   r: '13–16', call: 'Split mid',      decided: 'Time on clock', v: 'HOLD' },
      { m: 'Anubis',  r: '16–11', call: 'Default spread', decided: 'Morale', v: 'GO' }
    ];
    root.innerHTML =
      '<div class="sk-player-recap">' +
        '<div class="le-label">Last 5 <span class="le-hint">the factor that decided each one</span></div>' +
        '<table class="sk-player-table"><thead><tr><th>Map</th><th>Result</th><th>The call</th><th>Decided by</th><th>Field said</th></tr></thead>' +
        '<tbody data-testid="matches-body">' +
        matches.map(function (x) {
          return '<tr><td>' + x.m + '</td><td>' + x.r + '</td><td>' + x.call + '</td>' +
            '<td class="sk-player-decided">' + x.decided + '</td>' +
            '<td class="sk-player-v sk-v-' + x.v.replace('-', '') + '">' + x.v + '</td></tr>';
        }).join('') +
        '</tbody></table>' +
        '<p class="sk-player-foot">Vibes lose games. Logged factors don\u2019t.</p>' +
      '</div>';
  }
};
