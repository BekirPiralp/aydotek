# Aydotek

Bu proje __Aydotek__ firmasının gereksinimleri göz önünde bulundurularak geliştirilmiştir.

__Angular__ platformundadır. 

Component mimarisi ile ihtiyaçları en alt parçalara bölme ve yönetme göz önüne alınarak geliştirilmiştir.

## Tasarım Aşamaları

- İlk olarak ihtiyaç göz önüne alındı 
    - Kurumsal yapıda olmalı
    - Gelen müşterinin dikkatini çekmeli
    - Göz yormamalı
- Tema oluşturuldu
    - Temada markanın temel rengi belirlendi
    - Tema uyumu için üç ana reng belirlendi
- İhtiyaç doğruldusunda sayfa sayısı belirlendi.
- Drawio kullanılarak wareframe oluşturuldu.
    - Sayfanın genel hatları belirlendi
    - Taslak sayesinde yazıların sitilleri ve yerleri belirlendi
    - Resimlerin yerleri ile şekilleri belirlendi
    - Vurucu cümleler seçildi

![WareFrame](/web%20dessing/Aydotek%20web%20dessing-1.jpg)

- Projenin mimarisi oluşturuldu
    - Component yapısı ve esnekliği korundu
    - Projenin sürdürülebilir ve gelişmeye açık olması sağlandı
    - __Solid__ yapısına uygun olması sağlandı
    - view kısmında ana komponentyapısı
        - page component
            - Home Page component
                - main component
                - other components
            - 
            - 
            - 
        - tool component
            - `araç olarak tüm projelere uygunluk gözetildi`
            - Screen component

![Mimari](/web%20dessing/temel%20componentler%20için%20dosya%20yapısı%20.webp)

![mimariShell](/web%20dessing/Ekran%20Görüntüsü%20-%202025-07-13%2017-49-53.png)

> ## Getirisi
> - Projenin bu mimaride yapılması sayesinde şimdilik ekrandaki *section*lara yönlendirme yapan *nav bardaki* butonlar ileride direkt kendi sayfalarına yönledirme sağlayabilecekler.
> - Projenin gelişime açık olması sağlandı
> - Yeni sayfaların eklenmesi kolaylaştı.
> - Mimari sayesinde ihtiyaç doğrultusunda 
>   - Backend iletişimi merkezden kontrol edilebilir şekilde dizayna müsait oldu
>   - Modeller için merkezi özel alanlar eklenmiş oldu
>   - Projeye devam edecek olan personel / personellerin, müdehaleleri kolaylaştı.
>   - Personellerin seviyeleri ne olursa olsun projeye dahil olabilecekleri bir alt yapı oluşturulmuş oldu.
>   - Verilerin __Backend__ de tüm mimariler (microservis, resfull...) entegrasyno kolaylaştı.
>   - Backendde kullanıla bilecek olan tüm güvenlik algoritmalarının entegrasyonuna imkan tanıyan halde olması sağlandı. (__JWT Bear__ gibi sistemlerin entegrasyonu kolaylaştı.)
>   - İstenildiğinde kolayca __Docker__ gibi __container__ larda çalışabilecek dizayn oluşturulmuş oldu.
>   - Yeni başlayan şirketlerin hızlı proje için __Reac Native__ kullanarak proje geliştirip ilerliyen dönemlerde projenin yönetilmesine engel olan yapılar, __Angular__ ve bu mimarimiz sayesinde ortadan kaldırılmış ve **class**lar ile **component**ler arası iletişim netleştirilmiş, ihtiyaçlar ile **encapsulation** sağlanmış oldu.


## Uyumluluk
- Normal Masaüstü ekranlar
- Mobil ekranlar  
- 4k gibi geniş ekranlar

## Erişim
Linkedin [linkedin.com/in/bekirpiralp](https://linkedin.com/in/bekirpiralp)

Mail [bekir01piralp@gmail.com](mailto:bekir01piralp@gmail.com)

İncelemek isteyenler için:
    [aydotek.com.tr](https://aydotek.com.tr)

## 📄 Lisans (License)

Bu proje özel mülkiyettir. Tüm hakları saklıdır.

Kodun tamamı Bekir PİRALP'e aittir ve izinsiz olarak kullanılamaz, kopyalanamaz, değiştirilemez veya dağıtılamaz.

© 2025 Bekir PİRALP – All Rights Reserved.
