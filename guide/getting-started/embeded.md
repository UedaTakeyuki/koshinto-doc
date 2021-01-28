# embeded sansi

## clone sample project
Clone the sample project on the github to your PC as follows:

```bash:
git clone https://github.com/UedaTakeyuki/sansi_examples.git
```

Move to c sample code as follows:

```bash
cd sansi_examples/c
```

You can see following files:

- **README.md**:  readme file
- **compile.sh**: shell script for compileation
- **main.c**: a sample file to show how to use sansi
- **main.simple.c**: a sample application file of 10 second countdown
- **sansi.h**: header file to use sansi library.

For a while, I will explain how to embed sansi and set copy protection using **main.simple.c**, which is a simple 10-second countdown app, as an example.
<!--しばらくは簡単な10秒間秒読みアプリである main.simple.c を例として sansi の組み込みとコピーガードの設定方法を説明します-->


The contents of main.simple.c are as follows:

```c{8,16}:
/*
* 10 second countdown, copy guarded by sansi
* 
* @author Dr. Takeyuki UEDA
* @copyright Copyright© Atelier UEDA 2020 - All rights reserved.
*/

#include "sansi.h"  // for sansi libraries

#include <stdio.h>  // for printf
#include <unistd.h> // for seep
void tenseccount();

int main(){

  if (ok_confirmed == confirm(NULL, NULL, NULL)){
    printf("OK\n");
    tenseccount();
  } else {
    printf("NG\n");
  }
  return 0;
}

void tenseccount(){
  int i;
  printf("start 10 second countdown\n");
  for (i=10; i>0; i--){
    printf("%d\n",i);
    sleep(1);
  }
  printf("0!\n");
}
```

Point is as follows:
- include sansi.h at line 8.
- check the result of calling confirm() function at line 16, call tenseccount() for count down if result is ok_confirmed which is defined at sansi.h, or exit if result is other.
<!--
16行目でconfirm（）関数を呼び出した結果を確認し、結果がsansi.hで定義されているok_confirmedの場合はカウントダウンのために、tenseccount（）を呼び出すか、結果がその他の場合は終了します。
-->

## copy downloaded sansi library to here
Copy [downloaded sansi library](download) to here.

The library file name can be as follows:
** libsansi_[12 character bind id for your library]_[target name]_v1.1.o

The folder might be as follows, depend on your bind id and the target archtecture of your application:

### 1. for MAC
```bash
README.md				main.c
compile.sh				main.simple.c
libsansi_XMdvaoLeqDKn_mac_v1.1.o	sansi.h
```

### 2. for ARM Linux (Raspberry Pi, C1 server on the Scaleway, etc. )
```bash
README.md				main.c
compile.sh				main.simple.c
libsansi_XMdvaoLeqDKn_arm_v1.1.o	sansi.h
```

### 3. for x86 Linux
```bash
README.md				main.c
compile.sh				main.simple.c
libsansi_XMdvaoLeqDKn_x86_v1.1.o	sansi.h
```

## compile.
You can use **compile.sh**, the usage is as follows:

```bash:
./compile.sh -h
Usage: ./compile.sh [-h][-c][-g][-m][-o obj] [source] [libsansi]
  [source]:   compiling source file, default is 'main.sample.c' 
  [libsansi]: path for linking 'libsansi….o', default is found it in cwd automatically 
  [-h]: show this usage and exit
  [-c]: compile for linux by clang
  [-g]: compile for linux by gcc, this is default
  [-m]: compile for mac by clang
  [-o obj] set compiled object file name, default is a.out
```

The compile.sh script compiles main.simple.c if no source file is specified. Also, if libsansi is not specified, it will search the directory and use the appropriate library file.
<!--compile.sh はソース・ファイルの指定がない場合はmain.simple.c をコンパイルします。また、libsansi の指定がない場合はディレクトリ内を検索して適切なライブラリファイルを利用します-->

Therefore, the compile command will be as follows depending on whether the target is linux or mac, or if it is linux, the compiler to use.
<!--したがって、コンパイルコマンドはターゲットが linux か mac か、linux の場合は使用するコンパイラに合わせて以下のようになります-->

### for Linux with gcc
```./compile``` or ```./compile -g``` as follow:

```
pi@raspberrypi:~/sansi_examples/c $ ./compile.sh -g
source   = main.simple.c
libsansi = libsansi_BQWpZrXOqAMX_arm_v1.1.o
compiler = gcc
obj      = a.out
compiling…
```

The generated object file is a.out

### for Linux with clang

```./compile -c``` as follow:

```bash:
source   = main.simple.c
libsansi = libsansi_BQWpZrXOqAMX_arm_v1.1.o
compiler = clang
obj      = a.out
compiling…
```


The generated object file is a.out

### for MAC

```./compile -m``` as follows:

```bash:
MacBook-Air:c takeyuki$ ./compile.sh -m
source   = main.simple.c
libsansi = libsansi_XMdvaoLeqDKn_mac_v1.1.o
```

The generated object file is a.out

## dependency
The sansi library depend on the **openssl** library. In general, it is usually had installed on your Linux, it may not be had installed on Mac.
<!--sansiライブラリは** openssl **ライブラリに依存しています。通常、Linuxにインストールされていますが、Macにはインストールされていない場合があります。-->

If you get an error when compiling that libssl or libcrypto cannot be found, please install openssl.
<!--コンパイル時に libssl や libcrypto が見つからない旨のエラーが表示される場合は openssl をインストールしてください-->
