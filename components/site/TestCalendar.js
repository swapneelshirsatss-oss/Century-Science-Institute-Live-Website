/*
 * GitHub contribution-style calendar of the PLANNED test schedule for a batch year:
 * one test every week and a full-length mock in the last week of each month.
 * This is a schedule, not past data, and it is labelled that way on the page.
 * When the institute provides real dates, pass them as `tests` / `mocks` (ISO date strings).
 */

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function buildYear(startISO, tests, mocks) {
  const start = new Date(startISO + "T00:00:00Z");
  // Align the grid to start on a Sunday, like GitHub
  const gridStart = new Date(start);
  gridStart.setUTCDate(start.getUTCDate() - start.getUTCDay());
  const end = new Date(start);
  end.setUTCFullYear(start.getUTCFullYear() + 1);

  const weeks = [];
  const monthLabels = [];
  let d = new Date(gridStart);
  let w = 0;
  while (d < end) {
    const col = [];
    for (let i = 0; i < 7; i++) {
      const iso = d.toISOString().slice(0, 10);
      const inYear = d >= start && d < end;
      let level = inYear ? 0 : -1;
      if (inYear) {
        if (mocks ? mocks.includes(iso) : isLastSundayOfMonth(d)) level = 2;
        else if (tests ? tests.includes(iso) : d.getUTCDay() === 0) level = 1;
      }
      if (inYear && d.getUTCDate() === 1) monthLabels.push({ w, m: MONTHS[d.getUTCMonth()] });
      col.push({ iso, level });
      d = new Date(d);
      d.setUTCDate(d.getUTCDate() + 1);
    }
    weeks.push(col);
    w++;
  }
  const count = (lv) => weeks.flat().filter((c) => c.level === lv).length;
  return { weeks, monthLabels, tests: count(1), mocks: count(2) };
}

function isLastSundayOfMonth(d) {
  if (d.getUTCDay() !== 0) return false;
  const next = new Date(d);
  next.setUTCDate(d.getUTCDate() + 7);
  return next.getUTCMonth() !== d.getUTCMonth();
}

export default function TestCalendar({ start = "2027-06-01", label = "2027–28 batch", tests, mocks }) {
  const { weeks, monthLabels, tests: nTests, mocks: nMocks } = buildYear(start, tests, mocks);
  const total = nTests + nMocks;
  const title = { 0: "Class day", 1: "Weekly test", 2: "Full-length mock" };

  return (
    <figure className="tc">
      <figcaption className="tc-cap">
        <strong>{total} tests</strong> planned in the {label}: one every week, and the last one each month is a full-length mock.
      </figcaption>
      <div className="tc-scroll" tabIndex={0} role="region" aria-label={`Test calendar, ${label}. Scroll sideways to see the full year.`}>
        <div className="tc-grid" style={{ gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))` }} role="img"
          aria-label={`Planned test calendar for the ${label}: ${nTests} weekly tests and ${nMocks} monthly full mocks.`}>
          {monthLabels.map((m) => (
            <span key={m.w + m.m} className="tc-m" style={{ gridColumn: m.w + 1 }}>{m.m}</span>
          ))}
          {weeks.map((col, wi) =>
            col.map((c, di) => (
              <span key={c.iso} className={`tc-c l${c.level}`} style={{ gridColumn: wi + 1, gridRow: di + 2, "--w": wi }} title={c.level >= 0 ? `${c.iso}: ${title[c.level]}` : undefined} />
            )),
          )}
        </div>
      </div>
      <div className="tc-foot">
        <span>Planned schedule. Exact dates are shared at admission.</span>
        <span className="tc-key">
          <i className="tc-c l0" /> Class day <i className="tc-c l1" /> Weekly test <i className="tc-c l2" /> Full mock (dotted)
        </span>
      </div>
    </figure>
  );
}
