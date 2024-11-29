class TelegramBtn {
    constructor({
                    phone: t,
                    phones: e,
                    text: s,
                    backgroundColor: a,
                    callTo: i,
                    iconColor: l,
                    position: o,
                    positionText: c,
                    style: n,
                    width: p,
                    ga: h,
                    fb: r,
                    pi: d,
                    tgID: z,
                }) {
        this.phone = t, this.phones = e || "", this.text = s || "", this.backgroundColor = a || "#4DC247", this.callTo = i || "", this.iconColor = l || "#fff", this.positionText = c || "tl", this.position = o || "rb", this.style = n || "", this.width = p || "60", this.ga = h || "", this.fb = r || "", this.pi = d || "", this.url = window.location.href, this.tgID = z
    }

    renderButton() {
        let t = this.backgroundColor, e = this.iconColor, s = this.width, a = document.createElement("div");
        a.className = "hyperx_telegram", a.classList.add(this.position), a.classList.add(this.positionText), a.classList.add("dn"), null != this.style && a.setAttribute("style", this.style), document.body.appendChild(a);
        let i = document.createElement("link");
        i.setAttribute("href", "https://cdn.jsdelivr.net/gh/hyperxzxc/tgLinkWidget/assets/css/tg.min.css"), i.setAttribute("rel", "stylesheet"), i.setAttribute("type", "text/css"), document.body.appendChild(i);
        let l = this.phones, o = "", c = "", n = l.length > 1, p = this.text;
        if (p = p.replace("[url]", "%0a%0a" + this.url), p = p.replace(/[\u00A0-\u9999<>\&]/g, (function (t) {
            return "&#" + t.charCodeAt(0) + ";"
        })), "" == l || l.length < 1) o = `http://t.me/${this.tgID}`, c = "link_telegramm"; else {
            o = "#", c = "link_telegram_toggle";
            let t = document.createElement("div");
            t.setAttribute("class", "hyperx_telegram_chatBox");
            let e = `<div class='hyperx_telegram_chatBox_header'><div class="header_title">${this.callTo}</div><div class="header_close"><a href="#" class="link_telegram_close"><span></span></a></div></div>`;
            for (var h of (e += '<div class="hyperx_telegram_chatBox_items">', l)) {
                let t = h.split(":"), s = t[0], a = t[1];
                e += `<div class="hyperx_telegram_chatBox_item"><a href="http://t.me/${this.tgID}" class="link_telegramm" target="_blank"><span class="item_name">${s}</span><span class="item_number">${a}</span></a></div>`
            }
            e += "</div>", t.innerHTML = e, a.appendChild(t)
        }
        if (void 0 !== this.callTo && "" != this.callTo) {
            let t = document.createElement("div");
            t.setAttribute("class", "hyperx_telegram_text"), t.innerText = this.callTo, a.appendChild(t)
        }
        let r = document.createElement("a");
        r.setAttribute("href", o), r.setAttribute("class", c), r.setAttribute("style", "text-decoration: none"), r.setAttribute("target", "_blank"), a.appendChild(r);
        let d = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        d.setAttribute("id", "hyperx_telegram_widget"), d.setAttribute("viewBox", "0 0 16 16"), d.setAttribute("width", s), d.setAttribute("height", s), r.appendChild(d);

        let _ = document.createElementNS("http://www.w3.org/2000/svg", "path");
        _.setAttribute("d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"), _.setAttribute("id", "telegram_icon_path"), d.appendChild(_);
        let w = this.ga, g = this.fb, v = this.pi;
        if (1 == n) {
            let t = document.querySelector(".hyperx_telegram a.link_telegram_toggle"),
                e = document.querySelector(".hyperx_telegram a.link_telegram_close");
            t.addEventListener("click", (function (t) {
                t.preventDefault(), document.querySelector(".hyperx_telegram_chatBox").classList.toggle("show")
            })), e.addEventListener("click", (function (t) {
                t.preventDefault(), document.querySelector(".hyperx_telegram_chatBox").classList.remove("show")
            }))
        }
        document.querySelectorAll(".hyperx_telegram a.link_telegram").forEach((t => {
            t.addEventListener("click", (function () {
                null != w && ("function" == typeof gtag ? (gtag("event", w[1], {
                    event_category: w[0],
                    event_label: w[2]
                }), console.log("push GTAG event " + w[2])) : "function" == typeof w ? (w("send", "event", w[0], w[1], w[2]), console.log("push GA event " + w[2])) : console.log("No GA install or detected")), null != g && ("function" == typeof fbq ? (fbq("track", g[0], {content_name: g[1]}), console.log("push FB event " + g[1])) : console.log("No Pixel install or detected")), null != v && ("function" == typeof pintrk ? (pintrk("track", v[0], {lead_type: v[1]}), console.log("push Pinteres event " + v[1])) : console.log("No Pinterest Pixel detected"))
            }))
        })), setTimeout((function () {
            document.querySelector(".hyperx_telegram").classList.remove("dn")
        }), 1e3), void 0 !== this.callTo && "" != this.callTo && (document.querySelector(".hyperx_telegram_text").style.display = "block")
    }
}