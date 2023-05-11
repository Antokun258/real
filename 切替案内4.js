setInterval(func2,10000);
                                    
                                     function func2() {
                                        var x = document.getElementById("test00");
                                        switch (x.innerHTML) {
                                            case "ご案内":
                                                x.innerHTML = "停車駅";
                                                break;
                                            case "停車駅":
                                                x.innerHTML = "ご案内";
                                        }
                                    }