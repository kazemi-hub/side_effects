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
            interval: 2000,
            
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
    // برچسب ریشه چرخ فلک چرخان را پیدا کنید ، تماس بگیریدslide()
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        // مقدار را برای پشتیبانی از تماسهای زنجیر برگردانید
        return this;
    }
})(jQuery);
