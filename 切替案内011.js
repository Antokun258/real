setInterval(func2,10000);
                                
                                function func2() {
                                    var x = document.getElementById("annai011");
                                    switch (x.innerHTML) {
                                        case "　":
                                            x.innerHTML = "御影・岡本・芦屋川・夙川・西宮北口・武庫之荘・塚口・十三"
                                break;
                                        case "御影・岡本・芦屋川・夙川・西宮北口・武庫之荘・塚口・十三":
                                            x.innerHTML = "　";
                                    }
                                }