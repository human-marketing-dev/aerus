// GENERADO por scripts/extract-buscador.mjs a partir de aerus-buscador-embed.html — no editar a mano.
export const BUSCADOR_HTML = String.raw`<style>
#aerus-buscador{--ab-ink:var(--aerus-deep-forest,#0c2626);--ab-accent:var(--aerus-spring-green,#aef821);--ab-bg:var(--forest-50,#f3f8f8);--ab-line:var(--forest-300,#9bc2c2);--ab-muted:var(--forest-500,#3e7e7e);--ab-h:54px;--ab-gap:12px;font-family:var(--font-body,"Space Grotesk",system-ui,sans-serif);color:var(--ab-ink);background:var(--ab-bg);border-radius:12px;padding:26px 28px 28px;box-shadow:0 18px 50px rgba(6,19,19,.28);box-sizing:border-box;text-align:left;width:100%;max-width:1040px;margin:0 auto;line-height:1.3}
#aerus-buscador *{box-sizing:border-box;font-family:inherit}
#aerus-buscador .ab-top{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:18px;flex-wrap:wrap}
#aerus-buscador .ab-trip{display:flex;gap:24px}
#aerus-buscador .ab-trip label{display:flex;align-items:center;gap:9px;font-size:15px;font-weight:500;cursor:pointer}
#aerus-buscador .ab-trip input{appearance:none;-webkit-appearance:none;width:20px;height:20px;border-radius:50%;border:2px solid var(--ab-ink);margin:0;cursor:pointer;background:#fff;flex:none}
#aerus-buscador .ab-trip input:checked{border-width:6px}
#aerus-buscador .ab-lang{display:inline-flex;border:1px solid var(--ab-line);border-radius:999px;padding:2px;background:#fff}
#aerus-buscador .ab-lang button{border:0;background:transparent;color:var(--ab-muted);font-size:12px;font-weight:600;letter-spacing:.08em;padding:7px 13px;border-radius:999px;cursor:pointer}
#aerus-buscador .ab-lang button[aria-pressed=true]{background:var(--ab-ink);color:#fff}
#aerus-buscador .ab-grid{display:grid;grid-template-columns:2.7fr 1fr 1fr;gap:var(--ab-gap)}
#aerus-buscador .ab-od{display:grid;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr);gap:8px;align-items:end;min-width:0}
#aerus-buscador .ab-swap{width:42px;height:var(--ab-h);border:1px solid var(--ab-line);border-radius:10px;background:#fff;color:var(--ab-ink);display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;flex:none}
#aerus-buscador .ab-swap:hover:not(:disabled){border-color:var(--ab-ink);background:var(--ab-accent)}
#aerus-buscador .ab-swap:disabled{opacity:.35;cursor:default}
#aerus-buscador .ab-row2{display:grid;grid-template-columns:1fr 1fr 1fr 1.3fr;gap:var(--ab-gap);margin-top:var(--ab-gap)}
#aerus-buscador .ab-f{display:flex;flex-direction:column;gap:6px;min-width:0}
#aerus-buscador .ab-f>span{font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ab-muted)}
#aerus-buscador select,#aerus-buscador input[type=date]{display:block;height:var(--ab-h);width:100%;min-width:0;max-width:100%;margin:0;border:1px solid var(--ab-line);border-radius:10px;background-color:#fff;color:var(--ab-ink);font-size:16px;font-weight:500;padding:0 14px;appearance:none;-webkit-appearance:none}
#aerus-buscador select{padding-right:38px;text-overflow:ellipsis;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1.5l5 5 5-5' fill='none' stroke='%230c2626' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 14px center}
#aerus-buscador input[type=date]{line-height:calc(var(--ab-h) - 2px);padding-top:0;padding-bottom:0}
#aerus-buscador input[type=date]::-webkit-date-and-time-value{text-align:left;margin:0;line-height:inherit;min-height:0}
#aerus-buscador input[type=date]::-webkit-datetime-edit{padding:0;line-height:inherit}
#aerus-buscador input[type=date]::-webkit-datetime-edit-fields-wrapper{padding:0}
#aerus-buscador input[type=date]::-webkit-calendar-picker-indicator{margin:0 0 0 8px;padding:0;cursor:pointer}
#aerus-buscador input[type=date]:disabled{opacity:.45}
#aerus-buscador select:hover,#aerus-buscador input[type=date]:hover:not(:disabled),#aerus-buscador .ab-step:hover{border-color:var(--ab-ink)}
#aerus-buscador .ab-step{height:var(--ab-h);border:1px solid var(--ab-line);border-radius:10px;background:#fff;display:flex;align-items:center;justify-content:space-between;padding:0 10px 0 14px;gap:8px;min-width:0}
#aerus-buscador .ab-step>span{font-size:15px;font-weight:500;color:var(--ab-ink);white-space:nowrap}
#aerus-buscador .ab-step>div{display:flex;align-items:center;gap:8px;flex:none}
#aerus-buscador .ab-step button{width:30px;height:30px;border-radius:50%;border:1px solid var(--ab-line);background:#fff;color:var(--ab-ink);font-size:17px;line-height:1;cursor:pointer;padding:0;flex:none}
#aerus-buscador .ab-step button:hover:not(:disabled){border-color:var(--ab-ink);background:var(--ab-bg)}
#aerus-buscador .ab-step button:disabled{opacity:.3;cursor:default}
#aerus-buscador .ab-step output{font-size:17px;font-weight:600;min-width:1.2em;text-align:center;font-variant-numeric:tabular-nums}
#aerus-buscador .ab-go{height:var(--ab-h);display:flex;align-items:center;justify-content:center;border-radius:10px;background:var(--ab-ink);color:#fff;font-size:16px;font-weight:600;letter-spacing:.04em;text-decoration:none;cursor:pointer;border:0;transition:background .15s,color .15s}
#aerus-buscador .ab-go:hover{background:var(--ab-accent);color:var(--ab-ink)}
#aerus-buscador .ab-go:disabled{opacity:.4;pointer-events:none}
#aerus-buscador .ab-modal{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(6,19,19,.62)}
#aerus-buscador .ab-modal[hidden]{display:none}
#aerus-buscador .ab-dialog{width:100%;max-width:460px;background:#fff;border-radius:14px;padding:28px 28px 24px;box-shadow:0 24px 70px rgba(6,19,19,.45);border-top:6px solid var(--ab-accent)}
#aerus-buscador .ab-tag{margin:0 0 10px;font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:var(--ab-muted)}
#aerus-buscador .ab-dialog h3{margin:0 0 10px;font-size:24px;font-weight:600;line-height:1.15;color:var(--ab-ink)}
#aerus-buscador .ab-msg{margin:0 0 22px;font-size:16px;line-height:1.5;color:var(--ab-ink)}
#aerus-buscador .ab-actions{display:grid;grid-template-columns:1.4fr 1fr;gap:10px}
#aerus-buscador .ab-ghost{height:var(--ab-h);border-radius:10px;border:1px solid var(--ab-line);background:#fff;color:var(--ab-ink);font-size:16px;font-weight:600;cursor:pointer}
#aerus-buscador .ab-ghost:hover{border-color:var(--ab-ink)}
#aerus-buscador :focus-visible{outline:2px solid var(--ab-ink);outline-offset:2px}
/* Tablet: dos columnas */
@media (max-width:960px){
  #aerus-buscador{padding:24px 24px 26px}
  #aerus-buscador .ab-grid{grid-template-columns:1fr 1fr}
  #aerus-buscador .ab-od{grid-column:1/-1}
  #aerus-buscador .ab-row2{grid-template-columns:1fr 1fr 1fr}
  #aerus-buscador .ab-row2 .ab-go{grid-column:1/-1}
}
/* Telefono: origen y destino a todo el ancho, fechas en pareja, pasajeros compactos */
@media (max-width:600px){
  #aerus-buscador{--ab-h:50px;--ab-gap:10px;padding:18px 16px 18px;border-radius:10px}
  #aerus-buscador .ab-top{margin-bottom:14px}
  #aerus-buscador .ab-trip{gap:18px}
  #aerus-buscador .ab-grid{grid-template-columns:1fr 1fr}
  #aerus-buscador .ab-od{grid-template-columns:minmax(0,1fr) auto;gap:var(--ab-gap) 8px;align-items:stretch}
  #aerus-buscador .ab-od .ab-f:first-child{grid-column:1;grid-row:1}
  #aerus-buscador .ab-od .ab-f:last-child{grid-column:1;grid-row:2}
  #aerus-buscador .ab-swap{grid-column:2;grid-row:1/3;align-self:center;height:46px;margin-top:16px}
  #aerus-buscador .ab-swap svg{transform:rotate(90deg)}
  #aerus-buscador input[type=date]{padding:0 10px;font-size:15px}
  #aerus-buscador .ab-row2{grid-template-columns:1fr 1fr 1fr}
  #aerus-buscador .ab-step{height:auto;flex-direction:column;align-items:stretch;justify-content:center;padding:8px 8px 9px;gap:6px}
  #aerus-buscador .ab-step>span{font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--ab-muted);text-align:center}
  #aerus-buscador .ab-step>div{justify-content:space-between;gap:4px}
  #aerus-buscador .ab-step button{width:28px;height:28px}
  #aerus-buscador .ab-go{height:54px;font-size:17px}
  #aerus-buscador .ab-dialog{padding:24px 20px 20px}
  #aerus-buscador .ab-dialog h3{font-size:21px}
  #aerus-buscador .ab-actions{grid-template-columns:1fr}
}
@media (prefers-reduced-motion:reduce){#aerus-buscador .ab-go{transition:none}}
</style>
<div class="ab-top">
  <div class="ab-trip" role="radiogroup" aria-label="Tipo de viaje">
    <label><input type="radio" name="ab-trip" id="ab-ow" value="ow"> <span data-t="ow">Sencillo</span></label>
    <label><input type="radio" name="ab-trip" id="ab-rt" value="rt" checked> <span data-t="rt">Redondo</span></label>
  </div>
  <div class="ab-lang" role="group" aria-label="Idioma / Language">
    <button type="button" id="ab-es" aria-pressed="true">ES</button>
    <button type="button" id="ab-en" aria-pressed="false">EN</button>
  </div>
</div>
<div class="ab-grid">
  <div class="ab-od">
    <label class="ab-f" for="ab-o"><span data-t="o">Origen</span><select id="ab-o"></select></label>
    <button type="button" class="ab-swap" id="ab-swap" aria-label="Invertir origen y destino" title="Invertir origen y destino"><svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M3 6h11m0 0l-3-3m3 3l-3 3M15 12H4m0 0l3-3m-3 3l3 3" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    <label class="ab-f" for="ab-d"><span data-t="d">Destino</span><select id="ab-d"></select></label>
  </div>
  <label class="ab-f" for="ab-d1"><span data-t="d1">Ida</span><input type="date" id="ab-d1"></label>
  <label class="ab-f" for="ab-d2"><span data-t="d2">Vuelta</span><input type="date" id="ab-d2"></label>
</div>
<div class="ab-row2">
  <div class="ab-step"><span data-t="a">Adultos</span><div><button type="button" data-k="a" data-s="-1" aria-label="Quitar adulto">&#8722;</button><output id="ab-n-a">1</output><button type="button" data-k="a" data-s="1" aria-label="Agregar adulto">+</button></div></div>
  <div class="ab-step"><span data-t="c">Ni&#241;os</span><div><button type="button" data-k="c" data-s="-1" aria-label="Quitar ni&#241;o">&#8722;</button><output id="ab-n-c">0</output><button type="button" data-k="c" data-s="1" aria-label="Agregar ni&#241;o">+</button></div></div>
  <div class="ab-step"><span data-t="i">Infantes</span><div><button type="button" data-k="i" data-s="-1" aria-label="Quitar infante">&#8722;</button><output id="ab-n-i">0</output><button type="button" data-k="i" data-s="1" aria-label="Agregar infante">+</button></div></div>
  <button type="button" class="ab-go" id="ab-go">Buscar</button>
</div>
<div class="ab-modal" id="ab-modal" hidden>
  <div class="ab-dialog" role="dialog" aria-modal="true" aria-labelledby="ab-mt">
    <p class="ab-tag" id="ab-mk"></p>
    <h3 id="ab-mt"></h3>
    <p class="ab-msg" id="ab-mb"></p>
    <div class="ab-actions">
      <a class="ab-go" id="ab-cont" href="#">Continuar</a>
      <button type="button" class="ab-ghost" id="ab-back">Regresar</button>
    </div>
  </div>
</div>`
