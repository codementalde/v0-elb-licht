# Araç Kaplama Sipariş Kılavuzu — ElbLicht Pflegedienst

Citroën C3 için 4 panel reklam kaplama. Matbaa: **WIRmachenDRUCK** (wir-machen-druck.de).
Tüm paneller **Auto-Aufkleber mit Luftkanälen** (bubble-free vinyl) — DIY uyumlu.

---

## Sipariş Listesi (hepsi Klebefolie / Auto-Aufkleber)

| # | Panel | Boyut (Endformat) | Adet | Dosya | Tahmini Fiyat |
|---|---|---|---|---|---|
| 1 | **Ön Kapı** | 600 × 400 mm | **2** (sol+sağ) | `araba-on-kapi.pdf` | ~35–55 €/adet |
| 2 | **Arka Kapı** | 500 × 350 mm | **2** (sol+sağ) | `araba-arka-kapi.pdf` | ~25–45 €/adet |
| 3 | **Kaput** | 800 × 250 mm | **1** | `araba-kaput.pdf` | ~45–70 € |
| 4 | **Arka Cam** | 1100 × 450 mm | **1** | `araba-arka-cam.pdf` | ~70–120 € |

**Toplam tahmini: ~235–390 € + KDV + kargo**

---

## WMD Sipariş Linki

**Auto-Aufkleber mit Luftkanälen** (tüm paneller için aynı kategori):
https://www.wir-machen-druck.de/auto-aufkleber-guenstig-drucken,category,30085.html

Sipariş seçenekleri:
- **Material:** PVC Folie mit Luftkanälen (bubble-free, langlebig 3–7 Yıl)
- **Form:** Rechteck
- **Konturschnitt:** Standart düz kesim (yeterli)
- **Übertragungsfolie (Applikationstape):** **JA** ekle — DIY yapıştırma için zorunlu

---

## Arka Cam Notu

Arka cam normal Klebefolie olarak basılıyor (Lochfolie değil). Bu **içeriden dışarı görüşü kapatır** — ancak:
- Yan aynalar yasal olarak yeterli (StVZO)
- Yola çıkmadan önce arka aynalar ayarlı olmalı
- Eğer içeriden görüş istenirse: WMD'ye **"Fahrzeug-Lochfolie"** olarak sipariş ver (50/50 perforation), ama beyaz arkaplan bu folio'da soluk görünür — tasarım koyu zemine geçmek gerekir

## Kaput Notu

Kaput tasarımı **800 × 250 mm** — kaputun **orta yatay bandına** yapıştırılır. Kenarlardaki kavislere/şişkinliklere değmez (kavislerde folie kalkar). Kaputun ortasına merkezlenecek şekilde monte et.

---

## Sipariş Ayarları

| Ayar | Değer |
|---|---|
| Format | PDF |
| Beschnitt (Bleed) | 3 mm umlaufend (dosyalarda zaten var) |
| Farbprofil | CMYK — WMD otomatik dönüştürür (ISO Coated v2 / Fogra 39) |
| Druck | 4/0 (tek yüz, full color) |
| Auflösung | 150 dpi @ Endformat (yeterli — büyük format) |
| Schriften | Embedded (Puppeteer otomatik gömer) |
| Übertragungsfolie | **JA** (DIY yapıştırma için) |

---

## Sağ taraf için Mirror

Logo + metin merkezde olduğu için **mirror gerekmiyor**. Sadece 1 dosya yükle, adet 2.

---

## Renk Notu

Puppeteer PDF **sRGB** üretir, WMD CMYK'ya çevirir. Teal `#0d9488` CMYK'da hafif mat görünebilir.
→ WMD online preview'de kontrol et. Sapma varsa: `C75 M0 Y45 K15`.

### Test Siparişi (önerilir)
İlk sefer **sadece 1 ön kapı** sipariş et (~50 €). Renk + boyut sahada doğrula, sonra kalanı topluca sipariş.

---

## DIY Yapıştırma Talimatları (tüm paneller aynı yöntem)

**Malzeme:** sabunlu su spreyi (1L su + 2–3 damla bulaşık deterjanı), plastik rakel, mikrofiber bez.

1. Yüzeyi alkollü temizleyici ile temizle, sil-kurut
2. Pozisyonu kâğıt şablonla işaretle (kalemle hafif iz)
3. Yüzeyi sabunlu suyla sıkıca ısla
4. Folio'nun arka kâğıdını çıkar, ıslak yüzeye yatır
5. **Rakel ile ortadan kenara** doğru hava + suyu sıvazla
6. Üst koruma filmini (Übertragungsfolie) yavaşça soy
7. Mikrofiberle nemi al, kenar kıvrımlarını parmakla bastır
8. **24 saat araç yıkama yok**, **48 saat yüksek hızlı çamaşır makinesi türü yıkama yok**

**Arka cam için:** 2 kişi gerekir. Wischer kolunu kaldır, cam tam kuru olsun (sabunlu suya gerek yok eğer Übertragungsfolie kullanıyorsan).

---

## Yasal Notlar

- **TÜV / Eintragung gerekmiyor** — temel renk (beyaz) değişmedi
- **Versicherung:** sigortaya formal bildirim önerilir (genelde ücretsiz)
- **Leasing:** Eğer leasing'se, leasing şirketinden yazılı onay al. Klebefolie 3–7 yıl dayanır, sökülürken profesyonel temizleyici gerekebilir
- **Arka cam:** Yan aynalar yasal olarak yeterli, görüş zorunluluğu yok

---

## PDF Yeniden Üretmek

Tasarım değişikliği olursa:

```bash
node generate-araba-pdf.js
```

`araba-pdf/vN/` klasörü altında **yeni bir versiyon** oluşturur — eski versiyonlar korunur.
