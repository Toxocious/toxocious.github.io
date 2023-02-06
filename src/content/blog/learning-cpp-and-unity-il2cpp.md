---
title: Learning CPP and Unity IL2CPP
timestamp: 1675713057000
description: I've always wanted to learn C++, and since a Unity game that I enjoy compiles to IL2CPP, I wanted to learn more about what goes on under-the-hood.
type: blog
---



I've been learning C++ over the past few weeks and it's been a great experience, especially considering I've spent most of my time with languages that were more catered to web development but also shared some overlap into the server-side of things.

I really wanted to figure out how Unity's IL2CPP works under the hood since it compiles from C# to IL to C++, and I wanted to figure out how their engine handled managing native game objects and whatnot after the game gets compiled to C++. During my search for knowledge about these things, I came across some very valuable blog posts by [DJ Katy](https://katyscode.wordpress.com/) that were very informative about the topic and immensely helpful for learning exactly what I wanted.



## Why I Wanted To Learn C++
Coming from languages like PHP, JavaScript, and Python, C++ offered yet another way of doing things, this time at a lower level than what I had become accustomed to. Between memory management, learning bits of the standard library, learning how the linker works (and still struggling with it on occasion), and also learning about structs and whatnot, much of this was new to me, with a bit of overlap into the languages that I already had experience in.

Thankfully, if you learn one language **really** well, learning a new language generally shares many similarities with what you're already used to. Due to this, I had somewhat of an easy time picking up and learning the language, with some difficulties along the way with how code gets compiled and with how the linker works at compilation time.

Anyhow, I wanted to learn a lower-level language that wasn't directly related with web development, while at the same time learning about how Unity's IL2CPP runtime worked under-the-hood. The benefits for learning C++ was too great to ignore when factoring in my personal interest.

Learning it now by building something that truly interests me is a fantastic way to figure out if I really like using the language (I do!) and gives me an excuse to keep using it in the future if I need something that's generally more performant than many of the other languages that I use.



## What Is Unity's IL2CPP?
I'll save us both some time and quote the [official documentation](https://docs.unity3d.com/Manual/IL2CPP.html) to give you a brief explanation of what IL2CPP is and what it's meant for.

> The IL2CPP (Intermediate Language To C++) scripting backend is an alternative to the Mono backend. IL2CPP provides better support for applications across a wider range of platforms. The IL2CPP backend converts MSIL (Microsoft Intermediate Language) code (for example, C# code in scripts) into C++ code, then uses the C++ code to create a native binary file (for example, .exe, .apk, or .xap) for your chosen platform.

I've come to notice that many Unity games will go through IL2CPP compilation as an additional means of making their game less vulnerable to malicious users who intend to cheat on their games. Add obfuscation to this and it makes the game much more difficult to do malicious things in.

Instead of those malicious users being able to slap the game's binaries into software like [dnSpy](https://github.com/dnSpy/dnSpy) and being able to see (and make edits to) the game's entire source code &mdash; from native Unity methods, to methods created by the game devs, and everything in-between &mdash; and then re-compile the code and use it in a way that benefits them, IL2CPP, even when dumped with a tool such as [Il2CppDumper](https://github.com/Perfare/Il2CppDumper), the only things you get are namespaces, classes, and method and field names. You don't get to see *any* of the source code in the way that a non-IL2CPP game does.

With that being said, both [dnSpy](https://github.com/dnSpy/dnSpy) and [Il2CppDumper](https://github.com/Perfare/Il2CppDumper) are still very useful tools to use if you're interested in learning about a game and looking into modding it.

I briefly mentioned that I learned a lot about IL2CPP from [DJ Katy](https://katyscode.wordpress.com/) and her blog. She goes deep into analysis into IL2CPP in a technicial sense, provides clear examples of what C# code compiles into after going through IL2CPP, and explains what's happened between compilation of the code. If you're interested in learning more about what happens, be sure to check out her various blog posts on the subject; they're all very informative!



## What Did I Build, You Ask?
I ended up building an [IL2CPP wrapper](https://github.com/Toxocious/Aetherim) which is used for accessing IL2CPP's native methods during run-time in the form of an injectable DLL.

"But why? How useful can that be?" And to that, I say **extremely useful**.

Imagine that you want to make a mod for a game that uses Unity's IL2CPP scripting back-end, but doing so is noticably harder than if the game used Unity's Mono scripting back-end. You *could* dump the game, find whatever classes, fields, and methods that you wanted so that you could hook them or get an instance of a class, or whatever else you may need to do for your mod.

I've seen many mod developers manually find the addresses for classes and methods that they use, and then hardcode these addresses in an ``offsets.h`` file, which gets used later for hooks and whatnot.

However, with this IL2CPP wrapper, you can forego the tedious parts of making a mod, which is to get the addresses of the classes, methods, and fields by opting to use IL2CPP's native methods, which can get all of these things for you. This makes it **much easier** to not only develop the mod, but to also **future-proof** it for when the game gets an update that changes the addresses of classes and methods.

One thing to note is that games that opt-in to being compiled with the IL2CPP scripting back-end can &mdash; and often do &mdash; strip out the unused IL2CPP native methods. This means that, while some games may be able to call the IL2CPP native method for getting the number of methods a class has, other games will have that method stripped out, meaning you couldn't get this number as easily. With that being said, my [IL2CPP wrapper](https://github.com/Toxocious/Aetherim) performs nullptr checks and will return as appropriate if necessary.

While this wrapper is currently intended for internal DLL uses, there is intention to extend the functionality to be able to generate a header file that contains offsets so that external mods can also make use of the project.

If you want to learn more about the project or would like to contribute to it in some form, check it out on GitHub! https://github.com/Toxocious/Aetherim



## Resources Referenced
- [Aetherim](https://github.com/Toxocious/Aetherim)
  - My IL2CPP wrapper for modding games during run-time
- [DJ Katy](https://katyscode.wordpress.com/)
  - Informative blogs about the IL2CPP run-time
- [IL2CPP Documentation](https://docs.unity3d.com/Manual/IL2CPP.html)
  - Official documentation for the IL2CPP run-time
- [dnSpy](https://github.com/dnSpy/dnSpy)
  - A .NET debugger and assembly editor
- [Il2CppDumper](https://github.com/Perfare/Il2CppDumper)
  - A program that dumps an IL2CPP executable and generates helper files for modding
