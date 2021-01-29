# Safekeeping of Key

## What is this
You can set a string of up to 128 characters here for a safekeeping key. To receive this string in your application, call sansi's confirm () function with a pointer to the char type as the third argument. When the result of confirm () is ok_confirmed, the above string is returned to there. 


Following is a sample code of how to get safekeeped key:

```c:
main(){
  #include "sansi.h"

  char safekeepkey[129]; 
  if (ok_confirmed == confirm(NULL, NULL, safekeepkey)){
    printf("%s",safekeepkey);
  }
}
```

