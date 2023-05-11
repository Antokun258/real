setInterval(func2,10000);
                                
                                function func2() {
                                    var x = document.getElementById("annai1");
                                    switch (x.innerHTML) {
                                        case "塚口・十三・大阪梅田へは岡本で通勤特急大阪梅田行きに乗り換え":
                                            x.innerHTML = "御影・岡本・芦屋川・夙川・西宮北口・武庫之荘・塚口・十三";
                                            break;
                                        case "御影・岡本・芦屋川・夙川・西宮北口・武庫之荘・塚口・十三":
                                            x.innerHTML = "塚口・十三・大阪梅田へは岡本で通勤特急大阪梅田行きに乗り換え";
                                    }
                                }