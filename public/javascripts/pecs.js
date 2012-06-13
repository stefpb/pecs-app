var pool = {
    'Persons' : {
        'pictures': {
            'community': '/9j/4AAQSkZJRgABAQEASABIAAD//gATQ3JlYXRlZCB3aXRoIEdJTVD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAUGBwQDCP/EACgQAAICAgIBBAIBBQAAAAAAAAECAwUEBhESAAcTFCEiMTIVFiNBQ//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6+v7XCoqKwu7OUw4NfiyZWTIFLdI41LMeB9ngA/Q8laH1BewuK2usdK2qg/qkskWFNYwQBJGSN5CG9uV2jJWOQgMASF58b7TW425ajl1mJYxpFkuE+Qi+4FaOUdhxyOeGQqfv6PkPX2W3+pg+Blazh65UVWxRjOnmsfky5Pw5hKFgVEAB96OMM5b8eGADH9BX7JbX82wJrmqCtTNixlzM/KsI5HixonZ0hVUUqZHkaOX9OAgjJb+SBuWn2DYazZ8TXNzirpZbT3TVWFXBKkEhjQO8MqOzGOTjuynsyuqP/EqA3nl5Wvb1ZMNW2xoruj54zqwrMkHuEhoJeVaN1YxgtET2AVGHU9H8TabHuGzby9hsmbRtjapZ5eJGuBhSxjIkaBOkqs8rj6jmKt9Ao4kT8h+Xgah4eHh4ER/bOza7Z2GXptlXzYFhkPlzVNsJOkWQ7F5XhnTlkV2JJRlcAnleoHQyvpFrd3sfpxhDZblsaslefvWVjL7eWjSyGX5Erx+43dmcEIUBH75JPGgb7sZ1yojbFwMizts6YYlZgQEK+RkMpIBYgiNFCs7yEEKqseGPClH6IYklBrGTo2TlSZWRrGW2CMiUntkQOqzQycEngdJQn0evaNwOAOoB9f1d0mDXx6hYYNT8BuBhy4YfFniCFREQvDRhfoqUI4KgEMOR5mfpxXb1sWuWU2BNX6pTXttk5suVjt7tpw2S/udT19lS0apErcdlX8zy481rZLnEoKeWyzBK6IVSOGFe0s8rsFjiQcjl2YhQOR9n7IH35IeiE1lh0OTqd7hxYVrTtG7xxydw0WQnvK31yPxdpoeQT2OOzfQYABYa5TV+v08NVWRyJjRM78yStI7u7s8ju7Eszs7MzMSSSxJ8PGHh4E5Va/kHcbDZrmSOfJAOLVJHIxTExCIy44IA9ySRSzMB+hGvJCclfXYGVVesFtlJXdq+/q4JWzI0P+PJxmKFJD14HeOWMry3/J+B/snh4DqyoRY7NXW2ZltJjVitJiYQQBRksGQzs37YiNmRV+gO7k9j1Kc1/r2Vl7VT7JVWYwMvBD42VG8AkizcSRkZ42HIIdSgZHB/ElgQQ7Dw8PAovDw8PA//2Q=='
        },
        'items' : {
            'I' : {
                'community': '/9j/4AAQSkZJRgABAQEASABIAAD//gATQ3JlYXRlZCB3aXRoIEdJTVD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAHAAAAgICAwAAAAAAAAAAAAAAAAYFBwIDAQQI/8QAKRAAAgIBBAICAQMFAAAAAAAAAQIDBAUABhESBxMUMSEVFnEiI0FDkf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD19n8rSwWCyGbycpho4+rJasyBS3SONSzHgfk8AH8DSrgfIL5DMY3HZHZW6sB+qSyRUpsjBAEkZI3kIb1yu0ZKxyEBgCQvOpfdONrby2jbxlTIxpFZcJ8hF9gVo5R2HHI54ZCp/P4OkfH5Ld/kwfAtbZp7cxGK3FGL082R+TLZ+HMJQsCogAPujjDOW/p4YAMfoO7uPyHBtvzam3tw5rH4nb8m2vnRy3HSFXtfK9fUSMRy3T6Qff3xphxG/MLkszVxi1c1Ta8XWjNexc9WO0yIXZU9ig8hVY8MByFJXkfnS/kdveKvJ27pskJjl8ziaq1JbWNytqEQRs7kRM8Eip27KxKk9uCpI4Kk87n2jV2t4Qz+NqZfM35aVKa/BkMvkZbViGxEneKVXbt19bRoyqiheV+uWYkLJ0a0Y+c2aFeyyMhliVyrAAryAeCASP8AhP8AJ0aBP/bO5tu5PIW9m5LHzUMhYe3NicsJOkVh2LyvDOnLIrsSSjK4BPK9QOhVfEW283uPxxSG5cy1bGSvP3xmMZfXbRpZDL8iV4/Y3dmcEIUBH3ySeLA37uM7cxEbVaFjJ5a9MKmMoQEK9iwykgFiCI0UKzvIQQqqx4Y8KYPwhUkwG2LOxrNqS1Y2xbaiLEpPaxA6rNDJwSeB0lCfg9e0bgcAdQG6pvvFV6sNPF7R3cIoEWOKCLbtiBI0UcAL7FRQAOAAD/A4Go/LZDdO+8fHg6e0MhgMVeVf1aznDEjNVZl9leOOGR27yIXUsSnQc8HsQRY+jQYwxpDEkUY6oihVHP0B9aNZaNAuYrb9g7xyG5szJHPZANXFJHIxSpUIjLjggD2SSKWZgPoRryQnJj8dQtYrzBlrSY7tj8/i4JWuRof7dmsxQpIevA7xyxleW/1PwP8AJNGgc9GjRoDRo0aD/9k='
            },
            'You': {
                'community': '/9j/4AAQSkZJRgABAQEASABIAAD//gATQ3JlYXRlZCB3aXRoIEdJTVD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAUEBgcBA//EACoQAAICAgEEAgICAQUAAAAAAAECAwQFBhEAEhMhByIUMSNBFRYkMkNh/8QAGQEAAgMBAAAAAAAAAAAAAAAAAwQAAgYB/8QALREAAQQBAgIHCQAAAAAAAAAAAQACAxEhBEESMQUTUWFxgbEyMzRikaHB8PH/2gAMAwEAAhEDEQA/ANh2rfs1TuZXDirnnx1C9XzLZ+OjNDDVx0U8dm1BOzKnLCNJY1Cd3ejKD9g3NzwPyC+QzGNx2R0rasB/lJZIqU2RggCSMkbyEN45XaMlY5CAwBIXnpvtONrblqNvGVMjGkVlwn5CL5ArRyjuHHI54ZCp9+j1nOSym9fJWv5GnFq1XX6eJzB88r5L8me29N/KiVxGgCkzxxAuW+vDABj+uE0LV428bg3tUye5nt1yIrYS/XEjeWzK7z2Y6taj5pIqymOKRDNLK0Erlg69gQhvRQOUsZmMTn6+u5vJWaGRynkbDZbFWrclZ3iRZGhsQTySKremcfYh0Rxyh9OxwEmubnjMfFqm0fi5vBVUJuYwLKkDSjh4ZeVMbh2jDPET3/VHBU9j9eGmx7hs28vkNku4Nq2qZO3UjWhSljFiRoE7JVZ5XHqOYq3oFHEifYfboTImloLhlPz66aOZzY3ENBNDagcAjke+xndXbV8vLkGvY+8qR5LGTeCyqkcOCOUmABPasi/YLySPakkg9HUWw4x3yLV4DCPMUXjYKpIMsBDKW/oEpI459c9oB54Xg6tGTRB2/fRA1bGhzXsFBwB/B8uIGu5LP9M7NruTyFvTclj5qGQsPbmxOWEnZFYdi8rwzpyyK7EkoyuATyvaB2GqfEutZvZfjammyZp6mNmecNjcWy+O0rSyGX8iV4/IxZmfkIUBH75JPGg77sZ1zERtVoWMnlr0wqYyhAQr2LDKSAWIIjRQrO8hBCqrHhjwpR/CFSTAaxZ0azaktWNYttRFiUnusQOqzQycEngdkoT0e3ujcDgDtBEou65U2Gx8b6nNrOUqY6erShMtexVEle2vh7exuOHj98MGQ+iByGHINQ+OMdvWxa5kpqE2P1TDZ3LWbstqu3lynDWX8nae3wqWjVIlbjuVfueXHV11XMV9e+L6lvIl5fxC9NIa8f8AJLKszQxwxqT9nLBUHv2ffPHvqL8ITZKngbOp52nFSyuHaN3jjk7w0VhPMreuR9XaaHkE9xrs3oMABw+7b4BOdICtXKPmd6lTcrhsfrWJ1yvjI5Ego5uNx5JWlkd7DSRyOzsSzOzWHZmJ5JJJ5/ROp+8s1h8Ni4AstibKVp2iVgHEUMglaT/xQUXk/wB8hf2w6Oo323KTfDxXzz9Lx97XcVr9g7jkNmzMkc9kA1cUkcjFKlQiMuOCAPJJIpZmA/QjXkhOSvx1C1ivmDLWkx3dj8/i4JWuRof47NZihSQ9vA745YyvLf8AU/A/snR0RJpLLVh17dEl2i5LHgKViS5hD4f9vHYnJVzK45IdfJIFDHt7ZXb2VXx+uyX5rezYja9eo7ATR7qs7xYxZIMjVkdC8RVnSQMrIGSXjtX7f8g5BOjpHrXNeYxyC1Q0MM2lj1jxbnmiNvHts1ZzVk4Vp0yrdMVzM5WExX8jMXEbr94K6kiGFvZHpSWIHADO398knR0dOMFNAWc1Mhklc4/wDAHkML//2Q=='
            },
            'We': {
                'community': '/9j/4AAQSkZJRgABAQEASABIAAD//gATQ3JlYXRlZCB3aXRoIEdJTVD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAYDBAUH/8QAKRAAAgICAgEEAgICAwAAAAAAAQIDBAUGERIABxMhIhQxFUEyUXGBkf/EABkBAAIDAQAAAAAAAAAAAAAAAAIDAQQFAP/EAC8RAAIBAwEEBgsAAAAAAAAAAAECAwAEESETMUFxUmGRobHwEhUyM3KBssHR0uH/2gAMAwEAAhEDEQA/AOj7Jvuw5C9erRS7JFrFWZMsctBjZawjx6Tiaws9jlTx7Cv7SxDsysgc9ldS14G5r9/MY3HXdA3XWv5WWSKlNbsGFJWSN5CH9mwzISschUOASByP35s69jYdy9C8LjIMgsa2cXURrCr7nV4wncccjkhkKn5+Dz5j4/Jbf6mD8C1rNPXMRitijF6ebI/ky2fw5hKFgVEAB96OMM5b68MAGP6SiK6hmGSa0rm5lt5nihYqFJGmm48cbz1mrexa6smwjXtRjMd5a63sjbv5O+8UEblkhARJlMjyGKQfDjoIiW/yQNVxeNyWK2Wprmz5HJQWcmZGxGSxGTumBmiQO0MsNiSVY347svyyOqNyFKgMwW7Wvb1kmGrbY0WbwfPF7GFZkg9wkNBLyrRurGMFoiewCow6no/mNpse4bNvL5DZLuDatqmTt1I1oUpYxYkaBOkqs8rj4jmKt8Ao4kT7D7eFsY+iKT6xu+MjHmSfGnPXcjd/kreAypEt2jFFKtpUCC3E4IEnQE9CGV1I/sr2AAIAPK2TAp+o2Hsxw93yFOepM/A+ix8SIef3+yw4+f3/AF88nnRk6g8Ki8VcrIox6QB+eoPLUE47BilD081LaNU1ik+n5enax92BLT4rNRuvsyuO7GOaPlkDcgMjK47csvUcoafpFreb2P04pDZcy1bGSvP3xmMZfbto0shl/IleP3G7szghCgI/fJJ4a7uztgfTvBTVqEuSy+RrQVsZQquObFhouwHuEEJGoDO0hBCopPBPCmD0QqSYDWLOjWbUlqxrFtqIsSk9rEDqs0MnBJ4HSUJ8Hr2jcDgDqJjGEAFDeMWuJGbeSfGt7P4vNJRx8eoZCjifwG4FOWmHqzxBCoiIXhowvwVKEcFQCGHI85n6cY7eti1zJTUJsfqmGzuWs3ZbVdvdynDWX9zqevsqWjVIlbjsq/c8uPOtbJmamAw8uSuCV0QqkcMK9pZ5XYLHEg5HLsxCgcj5PyQPnxQ9EJslTwNnU87TipZXDtG7xxydw0VhPeVvjkfV2mh5BPY12b4DAA6rVdjw2P1/O6pisZHIlaJrz8yStI7u4LyO7sSzOzszMxJJLEnw80cv9/UDX4z8had6YD/RBgXn/wAcj/v/AI8PFp7Tc/sKuXPu4fhP1tStrOGu6nm3u7BUymZ/Ehalh7dSP346dDlT7ZiXh/eJQF2VDyqxqCSvHkOJyt2j6qZzKUdMz1jHZqjW5srTEL/kV+yt2EpX6lJYwpJHzGwCngnw8PE5KtswdK0hHHPAbqRQWJ13gc9Dv7uqtXJDO5nZsdlBrGR9jGK0lSrfsV4IRYYMhnZo3kkZhGzIqlQo7sT2PQpBncbvlza8PseLxuIx9yislazHJkmkiuVZCrNG/EIZWVkVkcE9SX+rBiCeHjgjdI934rOa4iBxsV7W/amnD46++TbM5sVReEJrwRVnZ44IywZuGYAszlVJPAHCIOPgknh4eGqhRVaWUytk/wAA8+c1/9k='
            }
        }
    },
    'items': {
        'can' : {
            'community': '/9j/4AAQSkZJRgABAQEASABIAAD//gATQ3JlYXRlZCB3aXRoIEdJTVD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAQGBwX/xAAoEAABAwQCAQMEAwAAAAAAAAABAgMEAAUGEQcSEyExQRQWIjIjUbH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A1Xj9nmvOsIh5o3yRGsCrs27Jj2dzHmXUR0FxRaT5irsQUhP5FJPU+oKvWtFy7Ir99zxcUxCLBeuhjibOkXBLn08OMpakIV+OvItSkOaQlW/4z26hQUKlZOM+TLBZ4dosnNDjECG34WGZGNRnurY/UduwUSB87+B6e+7deMTvMq4wb3bcpXar2mIiHcZDUBtxmc2nspI8ThJbKXFrUkpV7LUFd/xKQjce5Pe7lmeWYpfnLZIk48YQ+qgxlsJe87Rc2W1uOFGta12PtvfroUG08yZrJi5rlLeKWa74fjF8lW55cGepucI8cpU5JShaS08A2rtoLQTo6/s27j/FJ+J8mXp56dcr2q+21mVcbpLaCAZLLi0IQjokIALbmunoUhtP7dj14tq4+yCBxjy/ZPAh2dlN0vUy2t+VIC0ymQloE70nZHzrXzQbBHeakR25DKwtp1AWhQ9lJI2DSo1ijuxLJAiPAB1mM22sA7HZKQD/AJSgmUpSgUpSgUpSgUpSgUpSgUpSg//Z'
        },
        'need': {
            'community': '/9j/4AAQSkZJRgABAQEASABIAAD//gATQ3JlYXRlZCB3aXRoIEdJTVD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAcGCAX/xAAmEAACAgICAgICAgMAAAAAAAABAgMEBQYAEQcSEyEiMRRBF2Fi/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKBsPkrcdq8wS/4/wmQz2padKYr4x98VlyN10I6dvtnhi6f8UVgzgdhgV6rXjfyJhN0haoizYrYa0QbI4O8jRW6jdL32jhS6dsAJFHqex+j9DyaMOk+C/HtPC4uhkZ4y7itTo1Wt5DJ2PUsx9UHbyEL9sfVVAUdqoAE1hyuewfmOxk8sNag3jP06+Pjnt3J2oYj5PZoMaoRT8s7/AA/I7F4wSUCqPYe4dI8cwlTN7vhtrw2E2eHXslVzFmWCDIY75qskRSu83TV3+UEH4mHsJh12Po9d83fAccccByV7TrGRTYNlGQ0Ohu+A2SzFO8IlhSeqYqsUIVlnKqwJV2VlYMpZv32OqpxwOZs+I9NxiHBVt+qX9fgluQ47J2q91sHRklSF7UEafKJ2RHkjRZJCBHHOSwIBk25ujDYLWtt1HyPlM9j8nmKdZquTlS0t+KzMI3WMeqyRyxRt8nqv6FdvZCS7c2m6apkL2Xh2XV8rBh9igrmqZ56izxWq/ZcQSA9Mq+/TeyEEff7/AFyU5Kucz50sYrH5HAaPsOIxNa5l8rXqiWxbeX7lFZZh8Sp9qHnZDIekQhl7AC1bxtGG0vVL+z7BZavjaKBpnVC7dswRVAH7LMyqP9n+uOQjx5jx5D8hJQxO7bbs+g6tYjmyFjNTh4stkE7aCGMxxx+yQt6yuXLBmEX4FSHLgdI8cccBzPbbo+nbbPVn2bWcVl5qjBoJLVZXZf8Ansj7U9/an8T/AGDxxwPE8HePYfHGnz4df4zWLOQsW53rgiMhn6jCgjtQIljHr9gH26PXXHHHA//Z'
        },
        'please': {
            'community': '/9j/4AAQSkZJRgABAQEASABIAAD//gATQ3JlYXRlZCB3aXRoIEdJTVD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGgABAAIDAQAAAAAAAAAAAAAAAAYHAwQIBf/EACUQAAEEAgICAwADAQAAAAAAAAIBAwQFAAYREgchExQxIjJRYf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCYM+Z02q3urZ7yZH0KqbZQtchS4YiE9G3HBKS4660vygaj06NHyKivpevY/WofLGzeUdQqqWijPa/YyIrT21XiJ9ePTMEq9kYJzty84Cdm/wCyCLgkq+lVL8q4MSrrItZXsDHhxGQYjtD+NtgKCIp/xEREyg7zxttrbG0088pLOsS9hkbGUuiUXJUj5nEIGzYIezhMECOEI8/IHVG0JxEHAvageqzq47FRNalxWGhabMJPzr1FOqcmqqpL6/VVVVUXlec3857pVgjvUK21yfr+xX8CLI+vT0lOdU7IcJG21WydVTFgmgU06OCBd1JEFCT48snSPJFdc0Nzb3btPTxaewWvlTm7RHYKup0TgHnAaVf5GI+wFFJU6qSLzgTvGYYMuLPhszYMlmVFfBDaeZcQwcFfwhJPSov+pjAzYxjAiex6LBub568G4va6Y/Ebhu/RnmyJtgRkKL14JPbhexUV9/qL7yjN0q7mn8VD4pieOdgbsnrFqcEqBHbmVMo0lC+52PhSBtOpdW3G+3AAi90556fxgUG9vUDxr5A2PV9YoqydB+1DeSsizRjPNG4200TEOK22aOnwHzKiq1z2PhF6kWMsmNpEqs3CTe0Gyya+LYSUkWVcUKO62+XI8qLigjo8oh+lMkTuvVBxgTPGMYDGMYDGMYH/2Q=='
        },
        'thanks': {
            'community': '/9j/4AAQSkZJRgABAQEASABIAAD//gATQ3JlYXRlZCB3aXRoIEdJTVD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAQGBwgB/8QAKxAAAgIBBAIBAwIHAAAAAAAAAQIDBAUABhESByETFDEyIkIVFiMkQWFx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ANf8l743dtryPYxW0oL+5KF6KNct9PQktttmVviRJgsQYyAxlpTV69yV7hgr8au/844HE+NsXmMDfk3NBaENLEdbgknyVhm+NU+Rz7fsGLk/gEkZgAh4tOIxlLE0zToRNFC0805BkZyZJZGlkbliT7d2P+ueBwPWsK3Fj935TGX/ACg9qzs5sRFeO1NuxY2A2ZJ5ew+SYSKxazZkJAiUc8OoBLsxIdAIWKAuAG49gHkA/wDde6gY/LY61YajHk6E9+EcTwQTqzIw9NyvPI4Pr3qfoGmmmgapfknZbbjx+Ut1LczZYYmWDERWJf7Wnd4cw20UDlJ1ZgBKD2UD9PHJ5ummg5m/j1/EZqqdpbSt7Oq7V2fZs2KV3HdWtWW6wVoWcEGVQyl1b9xRh+RPTddpbx27n3joY3NxZC6tZZyRC8Xzx/p/rIGADRt2VgykqQ6kEhgTA3947wu68VmqhVaNjOilDk7SJ3eevWm+QR8E8KSpkQOPa9w3vqBqhb+3muy9w4/J7gwtfHw4eWzR27gsXNHPbyMbQkJYKgr8EHCdOoVurEEkKPYa1ic9UymczGKqJMzYiSKGzMUIjMroJDGp/cyo0ZPH27gffkBqo+DJLUG3JKGSweRo5iSebIZazNQNeCa3YkMsgjLHtIq9+ik/ZY1B68BdNBommmmgah3MVi7sk0lzG07LzVmqytLArmSBvyiYke0P+VPo6aaDIru17dbyFtKC5iM9nDj1GMkyllD9NLXEUzJN2imLJMgkCO8sfWUk9Qvoo000H//Z'
        }
    }
};


/*********
 * Phonegap-Bridge
 */
var pictureSource;   // picture source
var destinationType; // sets the format of returned value
document.addEventListener("deviceready",onDeviceReady,false);
function onDeviceReady() {
    pictureSource=navigator.camera.PictureSourceType;
    destinationType=navigator.camera.DestinationType;
}
/*********
 * Phonegap-Bridge-End
 */


var selectedPath;
var sentence = [];

function resetPool() {
    selectedPath = [];
    showPool();
}

function getSubPool(selector) {
    var subPool = pool;
    for(var i = 0; i<selector.length; i++)
    {
        subPool = subPool[selector[i]];
    }
    return subPool;
}

function itemToHtml(cssClass, word, image) {
    return '<div title="' + word + '" class="' + cssClass + '"><img src="data:image/jpeg;base64,' + image + '" /><div>' + word + '</div></div>';
}

function showPool() {
    var subPool = getSubPool(selectedPath);
    $('#pool').html('');

    $.each(subPool, function(i) {
        if(i !== 'items' && i !== 'pictures') {
            $(itemToHtml('category', i , this.pictures.community)).appendTo('#pool');
        }
    });

    if(subPool.items) {
        $.each(subPool.items, function(i) {
            $(itemToHtml('word', i, this.community)).appendTo('#pool');
        });
    }
    
    $('<a href="#chat_new_word" data-rel="dialog" class="add">+</div>').appendTo('#pool');

    $('#pool .item').hammer({prevent_default: false}).bind('hold', function(ev) {
        takePicture(function(imageData) {
            getSubPool(selectedPath).items[$(ev.target).attr('title')].community = imageData;
        });
    });
}

function showSentence() {
    $('#sentence').html('');
    $.each(sentence, function(i) {
        var word = Object.keys(sentence[i])[0];
        $(itemToHtml('word', word, sentence[i][word].community)).appendTo('#sentence');
    });
    $('<div class="add">+</div>').appendTo('#sentence').on('click', function() {
        selectedPath = [];
        showPool();
    });
}

function takePicture(callback) {
    // Take picture using device camera and retrieve image as base64-encoded string
    if(!navigator.camera) {
        alert('No Camera detected!');
        callback('/9j/4AAQSkZJRgABAQEASABIAAD//gATQ3JlYXRlZCB3aXRoIEdJTVD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAoACgDASIAAhEBAxEB/8QAGwAAAQUBAQAAAAAAAAAAAAAAAAMEBQYHCAn/xAAxEAABAwMDAwMCAwkAAAAAAAABAgMEBQYRAAcSCBMhMUFRCRQVIiQWOVJhcXWBkbT/xAAYAQADAQEAAAAAAAAAAAAAAAAEBQYDB//EACsRAAECBAQEBgMAAAAAAAAAAAECAwAEESEFEjFBBhNRYRQiM0JSwWJxcv/aAAwDAQACEQMRAD8A2DaS/Khb9VqO324clqNOpTS3o811eEvMJTyOT74TlQPrgHPkaWPVDsaHnWl3sEls45fhstSVfzBDRzrJ+s3cKzP21ZtH8NnOV+ntJEyc3gNNMuoCu2seqxxUDnwE8j65I1lFBuDaO0toK7aV1WU9UbgniYuk1punR3ez3GQlrLylhwFC/OACPcZJ0DLrU0vkOH+T1HT9iKrF5drEJYYrKpA2dSPar5AbJXt0NRHoRRKpTq3SIlXpMxmbAmNJejvtKyhxBGQQdPNcX9K/UlYVk7VUmy7ucqMSTBffSiQ1FLrQaW4pwFRSSrOVqGAk+ANbPO6ndpjGzQqvMr8o+kaJBebIH8SlOpQlI/zn4B0YtaUJKlGgETcvLuzDqWmklSlWAGpjTL6umkWdbj9brTqkR2yEpSgZW6s5whI+Tg/60a4yvvfOn13cmBPvKkVKfbzMgCPTozoSy0c4/OojC1e6gMZ9MgeNGlxdm3vMzQJ2rqe8VwlcBwocjEUqde92QjKn8a7kb0tW20aHbH7xm6f7Kj/li6ddRz0DbDc2g3VR0Rfubg+4S/Bktc4762+HIkexV3Enx7jI8nTO3XG2vqK3W46tLaE0RBUpRwAPtYvknSPVS9F3HvyzYdkTH6nVrcefkfoGUvo5qUypOFeUniWRnwR5wdbT3L5fnNDt1r2gHhYTviz4ZvOgghYNklB1zE2HUHY6RRqluneUuVHqNe2O23l0CdIU2JS6WF9wJPkdwrOFgfKc+hxqU6ZUbWXLu/UqROp0WDPyt+n0dtjERwgclAKJJWUJBPFQxgE+cYFetqfLs2/mJt3WDVFRozinURJ0VyKwtRHgtlaSFcTg4IOcD+urxsaxcW63VZL3fet9+hUGksLjxu60R31dksJRzxhasLKyRnA4j40LLqVNro/bL7evc/Qh9jDLPD8uVYUcwdJHNBByivppI0PyVao0tEr9RlCUbdWmlCAlCa1xAAwAOyrA0akfqNISrY+kqIHJNxMYPx+nkaNN453FTkbb3VvDf9x7iUOHGo7FTKGW3ak6tAW222hCUpCEqKvDaVK9s+h8adUDZrqYsdUp2zb5s9tMjBcSI6S4rHsC7GUQB8ctGjS+SZSpAfVdR3P10iu4nxF9qYcwxk5GGzQJTYGm6t1Hua9qQ8nWz1lzIb0WVdlryGHUFLjS2IpCwfbzH1AUy1OoLa+0J1TYlR6UHMKkrp6mZaUY8BSmnEqA9cEpB8e4GjRrSdaCmy5opNwYE4annGptMoaKadISpJuCCaV7Eagi4MNV2BvzvpasFm4dzrQqlBRMRJdihoNvx3EhSfzJajJPIJWr8vPBz6++jRo1rKOF5lK1amBMdkGpHEXpZquVKiBWP//Z');
        showPool();
        showSentence();
    } else {
        navigator.camera.getPicture(function(imageData) {
                callback(imageData);
                showPool();
                showSentence();
            }, function(msg) {
                alert(msg);
            }, {
                quality: 50,
                targetWidth: 40,
                targetHeight: 40,
                destinationType: destinationType.DATA_URL
        });
    }
}


$(function() {

    showSentence();

    $('#pool .category').live('click', function() {
        selectedPath.push($(this).attr('title'));
        showPool();
    });

    $('#pool .word').live('click', function() {
        //console.log([selectedPath, $(this).attr('title')]);
        var wordindex = $(this).attr('title');
        var word = {};
        word[wordindex] = getSubPool(selectedPath).items[wordindex];
        sentence.push(word);
        showSentence();
        resetPool();
    });

    resetPool();

    $('#sentence .word').live('click', function() {
        sentence.splice($(this).index(), 1);
        showSentence();
    });
    
    
    $('#chat_new_word form').submit(function() {
        var new_word=$('#chat_new_word #word').val();
        var new_word_is_category=$('#chat_new_word #type option:selected').val() === 'yes';
        takePicture(function(imageData) {
            if(new_word_is_category) {
                getSubPool(selectedPath)[new_word] = {
                    'pictures' : {
                        'community': imageData
                    }
                };
            } else {
                if(getSubPool(selectedPath).items === undefined) {
                    getSubPool(selectedPath).items = {};
                }
                getSubPool(selectedPath).items[new_word] = { 'community': imageData };
            }
        });
        $.mobile.changePage($('#chat'));
        return false;
    })
});