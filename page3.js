var passport = document.forms['myForm']['passport-img'];
var hscmarksheet = document.forms['myForm']['hsc-marksheet'];
var sscmarksheet = document.forms['myForm']['ssc-marksheet'];
var semester = document.forms['myForm']['semester'];

            function sizeValidation(){
                if((passport.files[0].size) >= 4194304){
                    alert("Passport photo size must be less than 4MB");
                    return false;
                }
                if((hscmarksheet.files[0].size) >= 4194304){
                    alert("HSC marksheet size must be less than 4MB");
                    return false;
                }
                if((sscmarksheet.files[0].size) >= 4194304){
                    alert("SSC marksheet size must be less than 4MB");
                    return false;
                }
                if((semester.files[0].size) >= 10485760){
                    alert("All semester marksheet PDF or DOCS must be less than 10MB");
                    return false;
                }
            }
