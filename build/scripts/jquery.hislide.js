(function($) {
    // این عملکرد فقط وظیفه عملکرد یک چرخ فلک در هر تماس را بر عهده دارد
    // به عبارت دیگر ، فقط یک چرخ فلک تولید می شود دامنه این عملکرد فقط می تواند به یک چرخ فلک اختصاص یابد.
    // لازم است که هنگام فراخوانی این عملکرد ، برچسب ریشه چرخ فلک فعلی منتقل شود
    // پارامتر ele در اینجا برچسب ریشه یک چرخ فلک است
    var slide = function(ele,options) {
        var $ele = $(ele);
        // گزینه های تنظیم پیش فرض
        var setting = {
        		// زمان انیمیشن چرخ فلک را کنترل کنید
            speed: 1000,
            //کنترل فاصله زمانی (سرعت چرخ فلک)
            interval: 4000,
            
        };
        // ادغام اشیاء
        $.extend(true, setting, options);
        // موقعیت و وضعیت هر تصویر را مشخص کنید
        var states = [
            { $zIndex: 1, width: 120, height: 150, top: 69, left: 134, $opacity: 0.2 },
            { $zIndex: 2, width: 130, height: 170, top: 59, left: 0, $opacity: 0.4 },
            { $zIndex: 3, width: 170, height: 218, top: 35, left: 110, $opacity: 0.7 },
            { $zIndex: 4, width: 224, height: 288, top: 0, left: 263, $opacity: 1 },
            { $zIndex: 3, width: 170, height: 218, top: 35, left: 470, $opacity: 0.7 },
            { $zIndex: 2, width: 130, height: 170, top: 59, left: 620, $opacity: 0.4 },
            { $zIndex: 1, width: 120, height: 150, top: 69, left: 500, $opacity: 0.2 }
        ];

        var $lis = $ele.find('li');
        var timer = null;

        // رویداد
        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        move();
        autoPlay();

        // بگذارید هر شی با هر موقعیت فوق مطابقت داشته باشد
        // بگذارید از وسط گسترش یابد
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }

        // به بعدی تغییر دهید
        function next() {
            // اصل: آخرین عنصر آرایه را به حالت اول منتقل کنید
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }
    // برچسب ریشه چرخ فلک چرخان را پیدا کنید
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        // مقدار را برای پشتیبانی از تماسهای زنجیر برگردانید
        return this;
    }
  
})(jQuery);

let hiddenTitle = $('.h-title');
let imageLink = $('.image-link');
let hiddenContent = $('.text-count0');
let hiddenImage = $('#planet-images');
let jupiter = $('.jupiter');
let moon = $('.moon');
let pluto = $('.pluto');
let earth = $('.earth');
let venus = $('.venus');
let mars = $('.mars');
let sun = $('.sun')

//اسلاید اول ژوپیتر
jupiter.hover(function () {
    hiddenTitle.text("سیاره ژوپیتر");
    hiddenContent.text("در یک نگاه کوتاه، ژوپیتر یا مشتری بزرگ‌ترین سیاره در سامانهٔ خورشیدی است. این سیاره غول گازی با جرم یک هزارم خورشید است، ولی جرمی دو و نیم برابر تمامی دیگر سیاره‌های سامانهٔ خورشیدی دارد و دومین جسم در سامانهٔ خورشیدی بر پایهٔ جرم و حجم است. از نظر دوری از خورشید، مشتری پنجمین سیاره پس از تیر، ناهید، زمین و بهرام است. مشتری چهارمین جسم درخشان در آسمان پس از خورشید، ماه و ناهید است. اگرچه گهگاه مریخ درخشان‌تر به‌نظر می‌آید. به کمک دوربین دوچشمی برخی ماه‌های هرمز نیز قابل دیدن می‌باشند. جرم مشتری ۲٫۵ بار از مجموع جرم دیگر سیاره‌های سامانه خورشیدی بیشتر است. جرم مشتری ۳۱۸ بار بیشتر از جرم زمین است. قطر آن ۱۱ برابر قطر زمین است. مشتری می‌تواند ۱۳۰۰ زمین را درخود جای دهد. میانگین دوری آن از خورشید در حدود ۷۷۸ میلیون و ۵۰۰ هزار کیلومتر است یعنی بیشتر از ۵ برابر دوری زمین از خورشید. ستاره‌شناسان با تلسکوپ‌های برپاشده در زمین و ماهوارههائی که در مدار زمین می‌گردند به بررسی مشتری می‌پردازند. ایالات متحده تا کنون ۶ فضاپیمای بدون سرنشین را به مشتری فرستاده‌است. در ژوئیه ۱۹۹۴، هنگامی که ۲۱ تکه از دنباله‌دار شومیکر-لوی ۹ با اتمسفر مشتری برخورد کرد ستاره‌شناسان شاهد رویدادی بسیار تماشایی بودند. این برخورد برانگیزاننده انفجارهای سهمناکی شد که پاره‌ای از آن‌ها قطری بزرگ‌تر از قطر زمین داشتند");
    hiddenImage.attr('src','./image/jupiter.gif');
    imageLink.attr('href','https://fa.wikipedia.org/wiki/%D9%85%D8%B4%D8%AA%D8%B1%DB%8C_(%D8%B3%DB%8C%D8%A7%D8%B1%D9%87)');

  });

//اسلاید دوم ماه
moon.hover(function () {
    hiddenTitle.text("کره ماه");
    hiddenContent.text('ماه تنها قمر سیارهٔ زمین است که با بازتاباندن نور خورشید، شب‌های زمین را کمی روشن می‌کند. ماه پنجمین قمر طبیعیِ بزرگ در سامانهٔ خورشیدی در میان ۱۷۳ قمر موجود در این سامانه است قطرِ ماه حدودِ ۳٬۵۰۰ کیلومتر است. جوّ ندارد و در پهنهٔ آن دهانه‌های برخوردی درپیِ برخوردِ سنگ‌های آسمانی پدید آمده‌است. کرهٔ ماه چهاردهمین جسم در سامانه خورشیدی بر پایهٔ جرم و حجم می‌باشد. قطر کرهٔ ماه یک‌چهارمِ کرهٔ زمین است و هیچ سیارهٔ دیگری در سامانهٔ خورشیدی، نسبت به اندازهٔ خود، دورگردی به این بزرگی ندارد. چگالی ماه چهار پنجم چگالی زمین است. انسان‌ها از قدیم از کرهٔ ماه و چرخش منظم آن برای گاهشماری، به‌ویژه در کشاورزی، بهره می‌گرفتند. مسافران و دریانوردان نیز از نور و حضور ماه برای جهت‌یابی و ناوبری استفاده می‌کردند ماه هم‌چنین در اسطوره‌های اقوام حضور زیادی داشته و در برخی فرهنگ‌ها حتی آن را به‌عنوان یک ایزد پرستش می‌کرده‌اند. گرانش جاذبهٔ ماه باعث به‌وجود آمدن جزر و مد آب‌های کرهٔ زمین می‌شود. گرانش کرهٔ ماه هم‌چنین باعث باثبات ماندن محور گردش زمین به دور خود می‌شود که درصورت عدم وجود ماه، انحراف محوریِ زمین مرتباً تغییر می‌کرد و این امر باعث آشفته شدن آب‌وهوا و فصل‌ها در زمین می‌شد.');
    hiddenImage.attr('src','./image/Moon.gif');
    imageLink.attr('href','https://fa.wikipedia.org/wiki/%D9%85%D8%A7%D9%87');

  });

//اسلاید سوم پلوتون
pluto.hover(function () {
    hiddenTitle.text("سیارک پلوتون");
    hiddenContent.text('پلوتون در افسانه‌های روم باستان نام خدای زیرزمینی بوده و انگیزهٔ این نام‌گذاری فاصلهٔ بسیار دور این جرم آسمانی از خورشید بوده‌است. پلوتو بزرگ‌ترین جسم فضایی در سامانهٔ خورشیدی است که تا پیش از گذر کاوشگر فضایی نیوهورایزنز افق‌های نو از کنار آن در ۱۴ ژوئیهٔ ۲۰۱۵، هیچ‌یک از مأموریت‌های فضایی از سوی زمین به آن نرسیده بودند. پلوتون ساختاری از سنگ و یخ دارد و کره‌ای کوچک‌است که یک سوم ماه جرم آن است. قطر پلوتو ۲۳۷۰ کیلومتر است و این سیارهٔ کوتوله می‌تواند گاهی از زمین تا فاصلهٔ ۷٫۵ میلیارد کیلومتری دور باشد. چهار لکهٔ سیاه سطح پلوتو که به کمربند تیرهٔ دور استوای پلوتو متصل هستند و تقریباً به یک اندازه و به یک فاصله هستند توجه دانشمندان را به خود جلب کرده‌اند. پلوتو از نظر میزان جرم و حجم، هجدهمین جسم در سامانهٔ خورشیدی است.مدار پلوتو برخلاف مدار زمین و هفت سیارهٔ دیگر یک مدار نزدیک به دایره نیست بلکه این مدار یک مدار بیضی بسیار کشیده با خروج از مرکز بسیار محسوسی است و گردش مداری آن نزدیک به ۲۴۸ سال زمینی طول می‌کشد. کشیدگی مدار پلوتو بسیار زیاد و غیرعادی‌است به‌طوری‌که مدار آن با مدار نپتون، آخرین سیارهٔ سامانهٔ خورشیدی در دو نقطه برخورد دارد. فاصلهٔ پلوتو از خورشید در اوج مداری خود ۴۹ واحد نجومی است یعنی حدود ۵۰ برابر بیشتر از فاصلهٔ زمین از خورشیداست. پلوتو در حضیض خود تنها ۲۹ واحد نجومی از خورشید فاصله دارد.');
    hiddenImage.attr('src','./image/pluto.gif');
    imageLink.attr('href','https://fa.wikipedia.org/wiki/%D9%BE%D9%84%D9%88%D8%AA%D9%88%D9%86');

  });

//اسلاید چهارم زمین
earth.hover(function () {
    hiddenTitle.text("سیاره زمین");
    hiddenContent.text('زمین سومین سیارهٔ سامانهٔ خورشیدی است که در فاصلهٔ۱۴۹٬۶۰۰٬۰۰۰کیلومتری از ستارهٔ خورشید قرار دارد. از نظر واژه‌شناسی ایرانی، زم در زبان اوستایی به معنای سرد بوده‌است که با پسوند ین، واژۀ زمین را به معنای جسم سرد به وجود آورده‌است. این سیاره چگال‌ترین  به دلیل دارا بودن منبع وسیع آهن و فلزات دیگر و از نظر بزرگی پنجمین سیاره از هشت سیارهٔ سامانهٔ خورشیدی است. همچنین در میان چهار سیارهٔ سنگی گردان به دور خورشید تیر، ناهید، زمین و مریخ  زمین بزرگترین آن‌ها است. گاهی از آن با نام‌های جهان و سیارهٔ آبی نیز یاد می‌شود. نام لاتین آن Terra است. در سامانهٔ خورشیدی، فاصلهٔ زمین تا خورشید بین فاصلهٔ زهره یا ناهید تا خورشید و فاصلهٔ مریخ یا بهرام تا خورشید است. زمین جزو سیارات داخلی سامانهٔ خورشیدی به‌شمار می‌آید. زمین ششمین جسم در سامانه خورشیدی بر پایهٔ جرم و حجم می‌باشد. نزدیک به ۴٫۵۴ میلیارد سال به صورت دقیق تر ۰٫۰۰۰۶ ± ۴٫۵۶۷۲ میلیارد سال از پیدایش زمین می‌گذرد و زندگی بر روی سطح آن در طول یک میلیارد سال پدیدار گشته‌است. هم‌اکنون زمین خانهٔ میلیون‌ها گونه از جانداران است که انسان یکی از آن‌ها است. زیست‌کرهٔ زمین با گذر زمان جو زمین و دیگر شرایط فیزیکی و شیمیایی این سیاره را دچار دگرگونی‌های شگرفی کرده‌است و محیطی را فراهم کرده‌است تا جانداران زنده بتوانند به رشد و زیست‌زایی بپردازند. همچنین در اثر این دگرگونی‌ها لایهٔ اوزون به دور این سیاره تشکیل شده‌است، لایه‌ای که با کمک میدان مغناطیسی زمین مانع از ورود پرتوهای آسیب‌رسان خورشید می‌شود و به این ترتیب اجازه می‌دهد در زمین زندگی ادامه یابد.');
    hiddenImage.attr('src','./image/earth.gif');
    imageLink.attr('href','https://fa.wikipedia.org/wiki/%D8%B2%D9%85%DB%8C%D9%86');

  });

//اسلاید پنجم ناهید
venus.hover(function () {
    hiddenTitle.text("سیاره ناهید");
    hiddenContent.text('زُهره، ناهید یا ونوس به ترتیب نزدیکی به خورشید، دومین سیاره زمین‌سان منظومهٔ شمسی است که مدار آن در میان مدارهای زمین و عطارد قرار گرفته‌است. سیارهٔ زهره از نظر مداری، نزدیک‌ترین فاصله به زمین را دارد. زهره بعد از ماه، درخشان‌ترین جرم آسمانی طبیعی است که به هنگام شب در آسمان زمین دیده می‌شود و قدر ظاهری آن به ۴٫۶- می‌رسد. سیارهٔ زهره، بدون ماه است و در مدار تقریباً دایره‌واری به‌دور خورشید می‌گردد. این سیاره از بسیاری دیدگاه‌ها ازجمله اندازه، جرم، گرانش و ترکیبات ساختاری به زمین همانندی دارد و به خاطر همین نزدیکی‌ها آن را سیاره خواهر زمین نیز خوانده‌اند. زهره از نظر جرم و حجم، هفتمین جسم بزرگ و پرجرم در منظومهٔ شمسی است . زهره گرم‌ترین سیاره در منظومهٔ شمسی است. این سیاره دارای هواکره است. هواکره ضخیم و غلیظ آن موجب می‌شود که دیدن سطح آن با چشم غیرمسلح، دشوار باشد. بیشتر هواکره آن را کربن دی‌اکسید تشکیل داده و در ابرهای بالایی آن قطره‌های ریز سولفوریک اسید وجود دارند. وجود کربن دی‌اکسید در هواکره این سیاره که گرما را در سیاره نگه می‌دارد دمای آن را به مقدار بسیار چشم‌گیری ۴۸۰ درجه سلسیوس نزدیک سطح سیاره افزایش داده‌است. آغاز شب و سیارهٔ زهره در هنگام غروب این سیاره یکی از سیاره‌های سنگی و فشرده و دارای آتشفشان‌های فعال، زمین‌لرزه و رشته‌کوه است. زمان لازم برای یکبار گردش این سیاره به دور خورشید ۲۲۵ روز زمینی است.');
    hiddenImage.attr('src','./image/venus.gif');
    imageLink.attr('href','https://fa.wikipedia.org/wiki/%D8%B2%D9%87%D8%B1%D9%87');

  });

//اسلاید ششم مریخ
mars.hover(function () {
    hiddenTitle.text("سیاره مریخ");
    hiddenContent.text('مِرّیخ یا بَهرام چهارمین سیاره در منظومه شمسی است که در مداری طولانی‌تر و با سرعتی کمتر از زمین به دور خورشید می‌چرخد. هر یک بار گردش این سیاره به دور خورشید معادل ۶۸۷ شبانه‌روز زمین به درازا می‌کشد و طول شب و روز نیز از کرهٔ زمین کمی طولانی‌تر است. نام فارسی این سیاره بهرام و نام یونانی آن مریخ است. در کتاب‌های قدیمی فارسی آن را فلک شحنهٔ پنجم و سایس رواق پنجم نیز نامیده‌اند. قطر مریخ نزدیک به یک‌دوم قطر زمین و برابر ۶٬۷۹۰ کیلومتر است. نوری که از خورشید به مریخ می‌رسد نصف نوری است که زمین دریافت می‌کند، اما روز مریخی چهل دقیقه طولانی‌تر از روز زمینی است بنابراین شرایط از نظر نور تقریباً مثل زمستان زمین است و به این خاطر امکان رشد گیاهان در شرایط گلخانه‌ای در مریخ وجود دارد. روزهای مریخ ۲۴ ساعت و ۳۷ دقیقه درازا دارند. از آن‌جا که محور سیارهٔ مریخ همانند زمین °۲۴ درجه کج است، در این سیاره نیز فصل‌های سال وجود دارند. اما هر سال مریخی کمابیش دو برابر سال زمینی یعنی ۶۷۸ روز به درازا می‌کشد. جو مریخ سرخ رنگ است و از زمین در آسمان شب نیز سرخی آن دیده می‌شود. کرهٔ مریخ دو قمر کوچک به نام‌های فوبوس و دِیموس دارد که ریختی نابسامان دارند. این دو قمر شاید شهاب‌ سنگ‌هایی هستند که در مدار مریخ به دام افتاده‌اند.');
    hiddenImage.attr('src','./image/mars.gif');
    imageLink.attr('href','https://fa.wikipedia.org/wiki/%D9%85%D8%B1%DB%8C%D8%AE');

  });

//اسلاید هفتم خورشید
sun.hover(function () {
    hiddenTitle.text("ستاره خورشید");
    hiddenContent.text('خورشید با نام‌های ادبی یا قدیمی: خور، هور، مهر، روز یکی از ستارگان کهکشان راه شیری و تنها ستارهٔ سامانهٔ خورشیدی است که در مرکز آن جای دارد. خورشید یک کُرهٔ کامل است که از پلاسمای داغ ساخته شده‌است و در میانهٔ آن میدان مغناطیسی برقرار است. این ستاره که قطری نزدیک به ۱٬۳۹۲٬۰۰۰ کیلومتر دارد سرچشمهٔ اصلی نور، انرژی، گرما و زندگی بر روی زمین است. خورشید نخستین جسم در سامانهٔ خورشیدی بر پایهٔ جرم و حجم می‌باشد. قطر خورشید نزدیک به ۱۰۹ برابر قطر زمین و جرم آن ۳۳۰ هزار برابر جرم زمین برابر با ۲‎×۱۰۳۰ کیلوگرم است. این مقدار ۹۹٫۸۶٪ کل جرم سامانهٔ خورشیدی است. انفجار نهایی یک ستارهٔ سنگین را ابرنواختر می‌نامند ولی خورشید هیچ‌گاه چنین انفجاری را تجربه نخواهد کرد زیرا کمترین جرم مورد نیاز برای رخداد یک ابرنواختر، هشت برابر جرم خورشید است. از نظر شیمیایی سه-چهارم جرم خورشید را هیدروژن و باقی‌ماندهٔ آن را بیشتر هلیم می‌سازد. پس از هیدروژن و هلیم، عنصرهای سنگین از سازندگان دیگر خورشید عبارتند از  اکسیژن، کربن، نئون و آهن و… این عنصرها، سازندهٔ ۱٫۶۹٪ از جرم خورشید اند که این مقدار خود ۵٬۶۲۸ برابر جرم زمین است. خورشید در رده‌بندی ستارگان بر پایهٔ رده‌بندی طیفی، در دستهٔ G2V جای دارد و به صورت غیررسمی با نام کوتولهٔ زرد از آن یاد می‌شود چون پرتوهای پیدای آن در طیف زرد-سبز شدیدتر است. هر چند که رنگ آن از سطح زمین، سفید باید دیده شود ولی وجود پراکندگی نور آبی در جو سبب زرد دیده شدن آن است همچنین در برچسب رده‌بندی طیفی، G2، گفته شده که دمای سطح خورشید نزدیک به ۵۵۰۵ سانتیگراد است و در V گفته شده‌است که خورشید مانند بیشتر ستارگان، یک ستارهٔ رشتهٔ اصلی است و در نتیجه انرژی خود را از راه همجوشی هسته‌ای هسته هیدروژن به هلیم فراهم می‌کند و در هر ثانیه، در هستهٔ خود، ۶۲۰ میلیون تُن هیدروژن را دچار همجوشی می‌کند.');
    hiddenImage.attr('src','./image/sun-1.gif');
    imageLink.attr('href','https://fa.wikipedia.org/wiki/%D8%AE%D9%88%D8%B1%D8%B4%DB%8C%D8%AF');

  });

//منو راهبری وبسایت. مقادیر را تغییر ندهید
  $('.nav-button').click(function(){
    $('body').toggleClass('nav-open');
    });
    
    $('.nav-item').click(function(){
    $('.nav-open').toggleClass('nav-open');
    });
    