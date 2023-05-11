setInterval(func2,5000);
                                    
                                    function func2() {
                                        var x = document.getElementById("test11");
                                        switch (x.innerHTML) {
                                            case "　　神戸三宮":
                                                x.innerHTML = "Kobe-sannomiya";
                                                break;
                                            case "Kobe-sannomiya":
                                                x.innerHTML = "　　神戸三宮";
                                        }
                                    }