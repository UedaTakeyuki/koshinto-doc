# C API of Sansi

int ``confirm``(char *substitutebid, char *secretstring, char *safekeepedkey)  

## return

- ng_confirmed: The result of confirm is **NG**. Your application should be exited because this is execution on an unintended environment.
- ok_confirmed: The result of confirm is **NG**. Your application can execute because this is execution on an intended environment.
- error_network: The message from koshinto was a timeout. There is no way to know whether on the intentional environment or not, so it depends on the nature of the application whether it is considered a mere accident and generously allowed to execute, or it is considered an intentional network blockage and refused to execute.
- error_internal: Internal error of sansi or koshinto. 
I would appreciate it if you could send me an issue report.

## params

### substitutebid

## header file
```c:
/**
* Header file for sansi
* 
* @file sansi.h
* @brief Header file for sansi
* @author Dr. Takeyuki UEDA
* @copyright Copyright© Atelier UEDA 2020 - All rights reserved.
*/
#ifndef _SANSI_H_
#define _SANSI_H_

/**
 * @fn
 * Print version.
 * @brief print version of sansi for debug information.
 */
void version();

/**
 * @fn
 * Confirmation of execution authority.
 * @brief Confirmation of execution authority.
 * @param (substitutebid) A BindID used on behalf of the original BindID of sansi. This BindID should be owned by the same owner of it that the same user who owns the original BindID.
 * @param (secretstring) Any string of up to 128 characters passed to koshinto as part of keys. If a string of 128 characters or more is specified, the previous 128 characters are passed.
 * @param (safekeepedkey) A pointer to the area that receives the safekeepedkey string returned by koshinto upon successful authentication.
 * @return ng_confirmed:   confirm ng.
           ok_confirmed:   confirm ok.
           error_network:  network error
           error_internal: service internal error
 * @sa 参照すべき関数を書けばリンクが貼れる
 * @detail 詳細な説明
 */
int confirm(char *substitutebid, char *secretstring, char *safekeepedkey);

typedef enum {
  ng_comfirmed   = 0,
  ok_confirmed   = 1,
  error_network  = -1,
  error_internal = -2,

} error_cause;

#endif
```