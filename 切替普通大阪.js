setInterval(func2,5000);
                                
                                function func2() {
                                    var x = document.getElementById("110");
                                    switch (x.innerHTML) {
                                        case "　普通　":
                                            x.innerHTML = "Local";
                                            break;
                                        case "Local":
                                            x.innerHTML = "　普通　";
                                    }
                                }