setInterval(func2,5000);
                                    
                                    function func2() {
                                        var x = document.getElementById("test11");
                                        switch (x.innerHTML) {
                                            case "　　大阪梅田":
                                                x.innerHTML = "Osaka-umeda";
                                                break;
                                            case "Osaka-umeda":
                                                x.innerHTML = "　　大阪梅田";
                                        }
                                    }