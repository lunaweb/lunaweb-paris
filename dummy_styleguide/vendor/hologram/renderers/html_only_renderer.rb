Hologram::CodeExampleRenderer::Factory.define 'html_only' do
  example_template 'markup_only_example_template'
  lexer { Rouge::Lexer.find('html') }
end
